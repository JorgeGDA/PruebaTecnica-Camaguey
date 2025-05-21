var togglePassword = document.getElementById("toggle-password");
var BASE_URL = origin+"/01_modulo_de_acceso_y_autenticacion/";

document.getElementById('recuperar').style.display = 'none';
document.getElementById('msgerror').style.display = 'none';
document.getElementById('msgerror1').style.display = 'none';
document.getElementById('cod_seguridad').style.display = 'none';
$('#btn_acceder').attr('disabled', true); //set button disable 



//Confirmar fin alistamiento 
function olvide_password() {
	event.preventDefault();
	$('#i_login').hide();
	$('#recuperar').fadeIn(1000);
}

/* $('#N_password').on('change keyup paste', function () {
	$('#btn_acceder').attr('disabled', false);

	if ($('#N_password').val().length == 0) {
		$('#btn_acceder').attr('disabled', true);
	}
}); */



$(document).ready(function () {
	$('#password').blur(function () {
		var user = $(this).val();

		if (user == '') {

			$('#msg_password').html('La Contraseña es requerida').css('color', 'red');

		} else {

			$('#msg_password').empty();
			$('#btn_acceder').append('<i btn btn-primary></i>');
			$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
			$('#btn_acceder').attr('disabled', false); //set button disable 

		}

	});
});


$(document).ready(function () {
	$('#username').focus();
	$('#username').blur(function () {
		var user = $('#username').val();
		var password = $('#password').val();
		if (user == '') {

			$('#msg_username').html('El Usuario es requerido').css('color', 'red');

		} else {

			//var info = { username: user };
			/* $('#btn_acceder').html('<i class="spinner-border spinner-border-sm"></i> Buscando...'); //Cambio el texto del botón
			$('#btn_acceder').attr('disabled', true); */ //set button disable 


			$.ajax({
				url: BASE_URL+'Auth/login',
				type: 'POST',
				dataType: 'json',
				data: {username: user,
						password:password},
				success: function (msg) {   //alert(msg);  
					if (msg.status != 200) {
						//console.log(msg);
						$('#msg_username').html('El Usuario es Incorrecto').css('color', 'red');
						$('#btn_acceder').attr('disabled', true); //set button disable 
						$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
						$('#btn_acceder').attr('disabled', true); //set button disable 
						$('#password').val('');
						document.getElementById('cod_seguridad').style.display = 'none';
						$('#dbl_fact').val('');
					} else {
						if (msg.dble_f == true) {
							$('#msg_username').html('El Usuario es correcto').css('color', 'green');
							$('#btn_acceder').append('<i btn btn-primary></i>');
							$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
							$('#btn_acceder').attr('disabled', false); //set button disable
							$('#dbl_fact').val(1);
							document.getElementById('cod_seguridad').style.display = 'block';
							Swal
							.fire({
								title: "AVISO",
								text: "se le a enviado un codigo de seguridad a su correo, o telefono celular registrado",
								icon: 'Succes',
								confirmButtonText: "ok",
							});
						}else if(msg.dble_f == false){
							Swal
							.fire({
								title: "AVISO",
								text: "No se registra informacion de correo o telefono, comuniquese con el administrador",
								icon: 'warning',
								confirmButtonText: "ok",
							});
							$('#btn_acceder').attr('disabled', true); //set button disable 
							$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
							$('#btn_acceder').attr('disabled', true); //set button disable 
							$('#password').val('');
							$('#dbl_fact').val('');
							$('#codigo_user').val('');
							//$("#cod_seguridad").style.display = 'none';
						}else{
							$('#msg_username').html('El Usuario es correcto').css('color', 'green');
							$('#btn_acceder').append('<i btn btn-primary></i>');
							$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
							$('#btn_acceder').attr('disabled', false); //set button disable
							$('#dbl_fact').val('');
							$('#codigo_user').val('');
							document.getElementById('cod_seguridad').style.display = 'none';
						}
					}
				}

			});
		}

	});
});

function logeo() {


	document.getElementById('msgerror').style.display = 'none';


	var user = $('#username').val();
	var password = $('#password').val();
	var dbl_fact =$('#dbl_fact').val();
	var cod_dbl =$('#codigo_user').val();

	if (user == '') {
		$('#msg_username').html('El Usuario es requerido').css('color', 'red');

	} else {
		$('#btn_acceder').html('<i class="spinner-border spinner-border-sm"></i> Accediendo...'); //Cambio el texto del botón
		$('#btn_acceder').attr('disabled', true); //set button disable 
		
		$.ajax({
			url: BASE_URL + 'Auth/login',
			type: 'POST',
			dataType: 'json',
			data: {
				username: user,
				password: password,
				dbl_fact: dbl_fact,
				cod_dbl:cod_dbl
			},
			success: function (msg) {  //alert(msg);	
				if (msg.status == 401) {					
					//console.log(msg.respuesta);
					document.getElementById('msgerror').style.display = '';
					$('#btn_acceder').append('<i btn btn-primary></i>');
					$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
					$('#btn_acceder').attr('disabled', false); //set button disable 
					//creo una cuki ip_intentos = intentos+1
				}else if(msg.status == 423){
					alert(msg.respuesta);
					document.getElementById('msgerror').style.display = '';
					$('#btn_acceder').append('<i btn btn-primary></i>');
					$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
					$('#btn_acceder').attr('disabled', false); //set button disable 
				}else if(msg.status == 400){
					alert(msg.respuesta);
					document.getElementById('msgerror').style.display = '';
					$('#btn_acceder').append('<i btn btn-primary></i>');
					$('#btn_acceder').text('Acceder'); //Cambio el texto del botón
					$('#btn_acceder').attr('disabled', false); //set button disable 
				}else {
					// eliminarCookies();
					document.cookie = "userID="+msg.respuesta.id;
					// document.cookie = "tokenID="+msg.respuesta.token+";path=/";
					//verificamos si tiene perfil de administrador
					window.location.href = msg.respuesta.datos_url.url_new;
					//window.location.href = BASE_URL + 'dashboard';
				}
			}

		});
	}

};

function eliminarCookies() {
	document.cookie.split(";").forEach(function(c) {
	  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
	});
  }

function recuperar_password() {
	event.preventDefault();
	document.getElementById('msgerror1').style.display = 'none';
	$('#msg_email').html('');
	$('#msg_username_rc').html('');
	var email = $('#email').val();
	var username = $('#username_rc').val();
	if (username =='') {
		$('#msg_username_rc').html('El usuario es requerido').css('color', 'red');

	} else if(email == ''){
		$('#msg_email').html('El correo es requerido').css('color', 'red');
	} else {
		$('#btn_recuperar').html('<i class="spinner-border spinner-border-sm"></i> Recuperando...'); //Cambio el texto del botón
		$('#btn_recuperar').attr('disabled', true); //set button disable 

		$.ajax({
			url: BASE_URL + 'Auth/recuperar',
			type: 'POST',
			dataType: 'json',
			data: {
				username: username,
				email: email
			},
			success: function (data) {  // alert(msg);
				if (data.status == 401) {
					document.getElementById('msgerror1').style.display = '';
					$('#btn_recuperar').append('<i btn btn-primary></i>');
					$('#btn_recuperar').text('Recuperar'); //Cambio el texto del botón
					$('#btn_recuperar').attr('disabled', false); //set button disable
					Swal
						.fire({
							title: "AVISO",
							text: data.respuesta,
							icon: 'warning',
							confirmButtonText: "ok",
						}) 
				} else {

					$('#btn_recuperar').append('<i btn btn-primary></i>');
					$('#btn_recuperar').text('Recuperar'); //Cambio el texto del botón
					$('#btn_recuperar').attr('disabled', false); //set button disable 
					//window.location.href = BASE_URL + "login/logeo";

					Swal
						.fire({
							title: "AVISO",
							text: "Se ha enviando un link a su correo por favor ingrese y siga las instrucciones",
							icon: 'warning',
							confirmButtonText: "ok",
						})
						.then(resultado => {
							window.location.href = BASE_URL;
						});

				}
			}

		});
	}
}


/* function nueva_password() {
	event.preventDefault();

	var id = $('#N_usuario_id').val();
	var password = $('#N_password').val();

	$.ajax({
		url: BASE_URL + 'login/nueva_password',
		type: 'POST',
		data: {
			id: id,
			password: password

		},
		success: function (data) {
			if (data == 0) {
				document.getElementById('msgerror').style.display = 'true';
				$('#btn_acceder').append('<i btn btn-primary></i>');
				$('#btn_acceder').text('Enviar'); //Cambio el texto del botón
				$('#btn_acceder').attr('disabled', false); //set button disable 

			} else {

				$('#btn_acceder').append('<i btn btn-primary></i>');
				$('#btn_acceder').text('accediedo'); //Cambio el texto del botón
				$('#btn_acceder').attr('disabled', false); //set button disable 
				//window.location.href = BASE_URL + "login/logeo";
				Swal
					.fire({
						title: "PERFECTO!!!",
						text: "Tú clave ha sido creada correctamente",
						icon: 'warning',
						confirmButtonText: "ok",
					})
					.then(resultado => {
						if (resultado.value) {
							// Hicieron click en "Sí"
							window.location.href = BASE_URL + "login/logeo";
						} else {
							// Dijeron que no

						}
					});
			}
		}

	});
} */



