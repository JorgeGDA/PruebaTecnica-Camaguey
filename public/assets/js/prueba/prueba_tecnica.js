$(document).ready(function () {
  cargar_usuarios();
});

var url = window.location.href;

var tabla_usuarios = "";
function cargar_usuarios() {
  space = "";
  var origin = window.location.origin;
  var url =
    origin + "/PruebaTecnica-Camaguey/public/PruebaTecnica/get_usuarios";

  tabla_usuarios = $("#tabla_usuarios").DataTable({
    ajax: { url: url, dataSrc: "" },
    columns: [
      { data: "id_usuario", visible: false },
      {
        data: "img_usuario",
        render: function (data) {
          return (
            '<img src="' +
            data +
            '" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%; border: 2px solid #d75151;" />'
          );
        },
      },

      {
        data: null,
        render: function (data, type, row) {
          return row.primer_nombre + " " + row.segundo_nombre;
        },
      },
      {
        data: null,
        render: function (data, type, row) {
          return row.primer_apellido + " " + row.segundo_apellido;
        },
      },
      { data: "correo_usuario" },
      { data: "telefono_usuario" },
      {
        data: null,
        render: function (data, type, row) {
          return "$ " + row.valor_ingresos.toLocaleString("es-ES");
        },
      },

      {
        data: "estado_usuario",
        render: function (data) {
          return data == 1
            ? '<span class="badge-pills outline-badge-success p-2">Activo</span>'
            : data == 2
            ? '<span class="badge-pills outline-badge-warning p-2">En Proceso</span>'
            : '<span class="badge-pills outline-badge-danger p-2">Inactivo</span>';
        },
      },
      {},
    ],
    columnDefs: [
      {
        targets: -1,
        data: "cantidad_servida",
        render: function (data, type, row, meta) {
          return (
            '<div class="float-center">' +
            '<button class="btn btn-outline-primary mb-2 mr-2 rounded-circle" id="editar_usuario" data-id_usuario="' +
            row.id_usuario +
            '">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit">' +
            '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>' +
            '<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>' +
            "</svg>" +
            "</button>" +
            '<button class="btn btn-outline-warning mb-2 mr-2 rounded-circle" id="eliminar_usuario" data-id_usuario="' +
            row.id_usuario +
            '">' +
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">' +
            '<polyline points="3 6 5 6 21 6"></polyline>' +
            '<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>' +
            '<line x1="10" y1="11" x2="10" y2="17"></line>' +
            '<line x1="14" y1="11" x2="14" y2="17"></line>' +
            "</svg>" +
            "</button>" +
            "</div>"
          );
        },
      },
    ],
    dom:
      "<'dt--top-section'<'row'<'col-12 col-sm-6 d-flex justify-content-sm-start justify-content-center'l><'col-12 col-sm-6 d-flex justify-content-sm-end justify-content-center mt-sm-0 mt-3'f>>>" +
      "<'table-responsive'tr>" +
      "<'dt--bottom-section d-sm-flex justify-content-sm-between text-center'<'dt--pages-count  mb-sm-0 mb-3'i><'dt--pagination'p>>",
    oLanguage: {
      oPaginate: {
        sPrevious:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
        sNext:
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
      },
      sInfo: "Showing page _PAGE_ of _PAGES_",
      sSearch:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
      sProcessing: "Procesando...",
      sLengthMenu: "Mostrar _MENU_ registros",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
      URL: "",
      sInfoMiles: ",",
      sLoadingRecords: "Cargando...",
      sLengthMenu: "Resultados :  _MENU_",
    },
    lengthMenu: [5, 10, 20, 50],
    pageLength: 5,
  });
}

$(function () {
  $("#tabla_usuarios").on("click", "#editar_usuario", function () {
    var row_clicked = $(this).closest("tr");
    var row_object = tabla_usuarios.row(row_clicked).data();
    localStorage.setItem("row_tabla_usuarios", JSON.stringify(row_object));
    ConstGlobal = JSON.parse(localStorage.getItem("row_tabla_usuarios"));
    var id = $(this).data("id_usuario");
    var origin = window.location.origin;
    swal({
      title: "Cargando...",
      text: "Espera mientras se cargan los datos.",
      timer: 3500,
      padding: "2em",
      onOpen: function () {
        swal.showLoading();
      },
    }).then(function (result) {
      if (result.dismiss === swal.DismissReason.timer) {
        console.log("Cargando los datos...");
      }
    });
    $.ajax({
      url:
        origin +
        "/PruebaTecnica-Camaguey/public/PruebaTecnica/getUsuarioById/" +
        id, // Cambia esta URL según tu ruta
      type: "GET",
      datatype: "json",
      success: function (data) {
        // Llenar los campos del formulario con los datos obtenidos
        $("#iduser").val(data.id_usuario);
        $("#primer_nombre").val(data.primer_nombre);
        $("#segundo_nombre").val(data.segundo_nombre);
        $("#primer_apellido").val(data.primer_apellido);
        $("#segundo_apellido").val(data.segundo_apellido);
        $("#telefono_usuario").val(data.telefono_usuario);
        $("#correo_usuario").val(data.correo_usuario);
        $("#numero_doc").val(data.numero_doc);
        $("#tipo_documento").val(data.tipo_doc);
        $("#fecha_nacimiento").val(data.fecha_nacimiento);
        $("#valor_ingresos").val(data.valor_ingresos);
        // Mostrar la foto del usuario
        if (data.img_usuario) {
          $("#previewFoto").attr(
            "src",
            origin + "/PruebaTecnica-Camaguey/public/" + data.img_usuario
          );
        }

        const nombreCompleto = `${data.primer_nombre} ${data.segundo_nombre} ${data.primer_apellido} ${data.segundo_apellido}`;
        $("#nombre_completo").text(nombreCompleto);

        $("#guardar_usuario2").hide();
        $("#actualizar_usuario2").show();
        editar_usuario();
        swal.close();
      },
      error: function (xhr, status, error) {
        console.error("Error al obtener los datos:", error);
      },
    });
  });

  $("#tabla_usuarios").on("click", "#eliminar_usuario", function () {
    var row_clicked = $(this).closest("tr");
    var row_object = tabla_usuarios.row(row_clicked).data();
    localStorage.setItem("row_tabla_usuarios", JSON.stringify(row_object));
    ConstGlobal = JSON.parse(localStorage.getItem("row_tabla_usuarios"));
    var id_usuario = ConstGlobal.id_usuario;
    eliminar_usuario(id_usuario);
  });
});

function mostrarFoto(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("previewFoto");

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
function quitarFoto() {
  document.getElementById("foto_usuario").value = "";
  document.getElementById("previewFoto").src = "assets/img/foto_user.jpg"; // Imagen por defecto
}
function añadir_usuario() {
  $("#div_tablausuarios").slideUp(500, function () {
    // Mostrar el formulario con animación
    $("#FormularioUser").slideDown(500);
  });
}
function volver() {
  $("#FormularioUser").slideUp(500, function () {
    limpiar_campos();
    $("#div_tablausuarios").slideDown(500);
  });
}
function editar_usuario() {
  $("#div_tablausuarios").slideUp(500, function () {
    // Mostrar el formulario con animación
    $("#FormularioUser").slideDown(500);
  });
}
function validar_campos() {
  let esValido = true;

  let soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
  let soloNumeros = /^[0-9]+$/;
  let correoValido = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  // Validar primer nombre
  if (
    $("#primer_nombre").val().trim() === "" ||
    !soloLetras.test($("#primer_nombre").val())
  ) {
    $("#primer_nombre").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#primer_nombre").addClass("is-valid").removeClass("is-invalid");
  }

  // Segundo nombre
  if (
    $("#segundo_nombre").val().trim() === "" ||
    !soloLetras.test($("#segundo_nombre").val())
  ) {
    $("#segundo_nombre").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#segundo_nombre").addClass("is-valid").removeClass("is-invalid");
  }

  // Primer apellido
  if (
    $("#primer_apellido").val().trim() === "" ||
    !soloLetras.test($("#primer_apellido").val())
  ) {
    $("#primer_apellido").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#primer_apellido").addClass("is-valid").removeClass("is-invalid");
  }

  // Segundo apellido
  if (
    $("#segundo_apellido").val().trim() === "" ||
    !soloLetras.test($("#segundo_apellido").val())
  ) {
    $("#segundo_apellido").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#segundo_apellido").addClass("is-valid").removeClass("is-invalid");
  }

  // Correo
  if (!correoValido.test($("#correo_usuario").val().trim())) {
    $("#correo_usuario").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#correo_usuario").addClass("is-valid").removeClass("is-invalid");
  }

  // Teléfono
  if (
    $("#telefono_usuario").val().trim() === "" ||
    !soloNumeros.test($("#telefono_usuario").val())
  ) {
    $("#telefono_usuario").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#telefono_usuario").addClass("is-valid").removeClass("is-invalid");
  }
  // Valor Ingresos
  if (
    $("#valor_ingresos").val().trim() === "" ||
    !soloNumeros.test($("#valor_ingresos").val())
  ) {
    $("#valor_ingresos").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#valor_ingresos").addClass("is-valid").removeClass("is-invalid");
  }

  // Fecha de nacimiento
  if ($("#fecha_nacimiento").val().trim() === "") {
    $("#fecha_nacimiento").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#fecha_nacimiento").addClass("is-valid").removeClass("is-invalid");
  }

  // Tipo de documento
  if (
    $("#tipo_documento").val() === "" ||
    $("#tipo_documento").val() === null
  ) {
    $("#tipo_documento").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#tipo_documento").addClass("is-valid").removeClass("is-invalid");
  }

  // Número de documento
  if (
    $("#numero_doc").val().trim() === "" ||
    !soloNumeros.test($("#numero_doc").val())
  ) {
    $("#numero_doc").addClass("is-invalid").removeClass("is-valid");
    esValido = false;
  } else {
    $("#numero_doc").addClass("is-valid").removeClass("is-invalid");
  }

  return esValido;
}

function limpiar_campos() {
  // Limpiar inputs de texto y quitar clases de validación
  $(
    "#primer_nombre, #segundo_nombre, #primer_apellido, #segundo_apellido, #correo_usuario, #numero_doc, #telefono_usuario, #fecha_nacimiento"
  )
    .val("")
    .removeClass("is-valid is-invalid");

  // Limpiar select
  $("#tipo_documento").val("").removeClass("is-valid is-invalid");

  // Limpiar campo oculto de ID si existe
  $("#iduser").val("").removeClass("is-valid is-invalid");

  // Limpiar foto y volver a la imagen por defecto
  $("#foto_usuario").val(""); // Limpiar el input file
  $("#previewFoto").attr("src", "assets/img/foto_user.jpg"); // Volver a imagen por defecto

  $("#guardar_usuario2").show();
  $("#actualizar_usuario2").hide();
}

function guardar_usuario() {
  console.log("Función detectada correctamente");
  var origin = window.location.origin;
  let url = "/PruebaTecnica-Camaguey/public/PruebaTecnica/guardar_usuario";
  let formData = new FormData();

  formData.append("primer_nombre", $("#primer_nombre").val());
  formData.append("segundo_nombre", $("#segundo_nombre").val());
  formData.append("primer_apellido", $("#primer_apellido").val());
  formData.append("segundo_apellido", $("#segundo_apellido").val());
  formData.append("correo_usuario", $("#correo_usuario").val());
  formData.append("tipo_documento", $("#tipo_documento option:selected").val());
  formData.append("numero_doc", parseInt($("#numero_doc").val()));
  formData.append("telefono_usuario", parseInt($("#telefono_usuario").val()));
  formData.append("valor_ingresos", parseInt($("#valor_ingresos").val()));
  formData.append("fecha_nacimiento", $("#fecha_nacimiento").val());

  const fotousuario = $("#foto_usuario")[0].files[0];

  if (fotousuario) formData.append("foto_usuario", fotousuario);

  if (!validar_campos()) {
    swal(
      "Campos incompletos o inválidos",
      "Por favor revisa los datos",
      "warning"
    );
    return;
  }

  swal({
    title: "Cargando...",
    text: "Espere mientras se guarda el usuario.",
    timer: 3600,
    padding: "2em",
    onOpen: function () {
      swal.showLoading();
    },
  }).then(function (result) {
    if (result.dismiss === swal.DismissReason.timer) {
      console.log("Cargando los datos...");
    }
  });

  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (data) {
      if (data.status == 200) {
        swal({
          title: "Operacion Exitosa!",
          text: "Usuario creado correctamente!;",
          type: "success",
          padding: "2em",
        }).then((okay) => {
          if (okay) {
            limpiar_campos();
            volver();
            $("#tabla_usuarios").DataTable().ajax.reload(null, false); // false mantiene la página actual
            swal.close();
          }
        });
      } else {
        alert("Error al guardar el usuario: " + data.message);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error: ", error);
      alert("Error al guardar el usuario: " + error);
    },
  });
}

function actualizar_usuario() {
  var id_usuario = $("#iduser").val();
  let url =
    "/PruebaTecnica-Camaguey/public/PruebaTecnica/actualizar_usuario/" +
    id_usuario;
  let formData = new FormData();

  // Incluir ID del usuario
  formData.append("id_usuario", $("#iduser").val());

  // Demás campos del formulario
  formData.append("primer_nombre", $("#primer_nombre").val());
  formData.append("segundo_nombre", $("#segundo_nombre").val());
  formData.append("primer_apellido", $("#primer_apellido").val());
  formData.append("segundo_apellido", $("#segundo_apellido").val());
  formData.append("correo_usuario", $("#correo_usuario").val());
  formData.append("tipo_documento", $("#tipo_documento option:selected").val());
  formData.append("numero_doc", parseInt($("#numero_doc").val()));
  formData.append("telefono_usuario", parseInt($("#telefono_usuario").val()));
  formData.append("fecha_nacimiento", $("#fecha_nacimiento").val());
  formData.append("valor_ingresos", parseInt($("#valor_ingresos").val()));

  // Foto (opcional)
  const fotousuario = $("#foto_usuario")[0].files[0];
  if (fotousuario) {
    formData.append("foto_usuario", fotousuario);
  }

  if (!validar_campos()) {
    swal(
      "Campos incompletos o inválidos",
      "Por favor revisa los datos",
      "warning"
    );
    return;
  }

  // Mostrar loading
  swal({
    title: "Actualizando...",
    text: "Espere mientras se actualiza el usuario.",
    timer: 3600,
    padding: "2em",
    onOpen: function () {
      swal.showLoading();
    },
  }).then(function (result) {
    if (result.dismiss === swal.DismissReason.timer) {
      console.log("Cargando los datos...");
    }
  });

  // Enviar AJAX
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    processData: false,
    contentType: false,
    success: function (data) {
      if (data.status == 200) {
        swal({
          title: "¡Actualización Exitosa!",
          text: "Usuario actualizado correctamente.",
          type: "success",
          padding: "2em",
        }).then((okay) => {
          if (okay) {
            volver();
            $("#tabla_usuarios").DataTable().ajax.reload(null, false);
            swal.close();
          }
        });
      } else {
        alert("Error al actualizar el usuario: " + data.message);
      }
    },
    error: function (xhr, status, error) {
      console.error("Error: ", error);
      alert("Error al actualizar el usuario: " + error);
    },
  });
}

function eliminar_usuario(id_usuario) {
  // Confirmación antes de cambiar el estado
  swal({
    title: "¿Estás seguro?",
    text: "¡No podras revertir esta accion!",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar!",
    cancelButtonText: "Cancelar",
    reverseButtons: true,
    padding: "2em",
  }).then((result) => {
    if (result.value) {
      // Realizar la solicitud AJAX para cambiar el estado
      $.ajax({
        url:
          origin +
          "/PruebaTecnica-Camaguey/public/PruebaTecnica/eliminar_usuario/" +
          id_usuario,
        type: "POST",
        datatype: "json",
        success: function (response) {
          console.log(response); // Mostrar respuesta en consola
          if (response.status === 200) {
            swal({
              title: "Eliminado!",
              text: "El usuario ha sido eliminada correctamente.",
              type: "success",
              padding: "2em",
            }).then(() => {
              // Recargar el DataTable
              $("#tabla_usuarios").DataTable().ajax.reload(null, false); // false mantiene la página actual
            });
          } else {
            swal({
              title: "Error!",
              text: response.message,
              type: "error",
              padding: "2em",
            });
          }
        },
        error: function (xhr, status, error) {
          console.error("Error:", error); // Mostrar error en consola
          swal({
            title: "Error!",
            text: "Ocurrió un error al intentar elimanr la construccion.",
            type: "error",
            padding: "2em",
          });
        },
      });
    }
  });
}
