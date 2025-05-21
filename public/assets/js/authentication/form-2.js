var togglePassword = document.getElementById("toggle-password");

var BASE_URL = origin+"/01_modulo_de_acceso_y_autenticacion/";
//document.getElementById('msgerror1').style.display = 'none';
$('#btn_acceder').attr('disabled', true); //set button disable 


$(document).ready(function () {
	$('#passwn').blur(function () {
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
	//cuki intentos == 3 bloquear entrada

});

$(document).ready(function () {
	var myInput = document.getElementById("passwn");
	var letter = document.getElementById("letter");
	var capital = document.getElementById("capital");
	var number = document.getElementById("number");
	var length = document.getElementById("length");
	var blank = document.getElementById("blank");
	var repet = document.getElementById("repet");
	var caract_espcial = document.getElementById("caract_espcial");
	var noValido = / /;
	var num_repet = /^(?!.*(.)(?:.*\1){2})/;
	var caracter_especial =/^(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}/;
	

	// When the user clicks on the password field, show the message box
	myInput.onfocus = function() {
		document.getElementById("message").style.display = "block";
	}
	
	// When the user clicks outside of the password field, hide the message box
	myInput.onblur = function() {
		document.getElementById("message").style.display = "none";
	}
	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
		
		//console.log(num_repet);
		// Validate lowercase letters
		var lowerCaseLetters = /[a-z]/g;
		if(myInput.value.match(lowerCaseLetters)) {  
		letter.classList.remove("invalid");
		letter.classList.add("valid");
		} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
		}
		
		// Validate capital letters
		var upperCaseLetters = /[A-Z]/g;
		if(myInput.value.match(upperCaseLetters)) {  
		capital.classList.remove("invalid");
		capital.classList.add("valid");
		} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
		}
	
		// Validate numbers
		var numbers = /[0-9]/g;
		if(myInput.value.match(numbers)) {  
		number.classList.remove("invalid");
		number.classList.add("valid");
		} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
		}
		
		// Validate length
		if(myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
		} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
		}

		if(noValido.test(myInput.value)) {
			blank.classList.remove("valid");
			blank.classList.add("invalid");
		} else {
			blank.classList.remove("invalid");
			blank.classList.add("valid");
		}

		if(num_repet.test(myInput.value)) {
			repet.classList.remove("invalid");
			repet.classList.add("valid");
		} else {
			repet.classList.remove("valid");
			repet.classList.add("invalid");
		}
		if(caracter_especial.test(myInput.value)) {
			//console.log('entro if');
			caract_espcial.classList.remove("invalid");
			caract_espcial.classList.add("valid");
		} else {
			//console.log('entro else');
			caract_espcial.classList.remove("valid");
			caract_espcial.classList.add("invalid");
		}
	}

});

function logeoNewPassword() {


	//document.getElementById('msgerror').style.display = 'none';


	var passwn = $('#passwn').val();
	var passwc = $('#passwc').val();
	var id_user = $('#id_usuario').val();

	if (passwn != passwc || passwc == '' || passwn == '') {
		$('#msg_passwn').html('Las contraseñas no coinciden').css('color', 'red');

	} else {
		$('#btn_acceder').html('<i class="spinner-border spinner-border-sm"></i> Actualizando...'); //Cambio el texto del botón
		$('#btn_acceder').attr('disabled', true); //set button disable 
		
		$.ajax({
			url: BASE_URL + 'Auth/restablecer_password',
			type: 'POST',
			dataType: 'json',
			data: {
				passwn: passwn,
				passwc: passwc,
				id_user: id_user
			},
			success: function (msg) {  //alert(msg);
				if (msg.status ==200) {
					Swal.fire({
						title: "AVISO",
						text: msg.respuesta,
						icon: 'success',
						confirmButtonText: "ok",
					});
					setTimeout(function() {
						window.location.href = BASE_URL;
					}, 2000);
				}else{
					Swal.fire({
						title: "AVISO",
						text: msg.respuesta,
						icon: 'warning',
						confirmButtonText: "ok",
					});
					setTimeout(function() {
						window.location.reload();
					}, 2000);
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




