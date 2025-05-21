<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PruebaTecnica - Camaguey</title>
    <link rel="icon" type="image/x-icon" href="assets/img/icono_prueba.ico" />
    <link href="assets/css/loader.css" rel="stylesheet" type="text/css" />
    <script src="assets/js/loader.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet">
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/plugins.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" type="text/css" href="plugins/table/datatable/datatables.css">
    <link rel="stylesheet" type="text/css" href="assets/css/forms/theme-checkbox-radio.css">
    <link rel="stylesheet" type="text/css" href="plugins/table/datatable/dt-global_style.css">
    <link rel="stylesheet" type="text/css" href="plugins/table/datatable/custom_dt_custom.css">
    <link rel="stylesheet" type="text/css" href="assets/css/style_pruebatecnica.css">
    <link href="plugins/animate/animate.css" rel="stylesheet" type="text/css" />
    <script src="plugins/sweetalerts/promise-polyfill.js"></script>
    <link href="plugins/sweetalerts/sweetalert2.min.css" rel="stylesheet" type="text/css" />
    <link href="plugins/sweetalerts/sweetalert.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/components/custom-sweetalert.css" rel="stylesheet" type="text/css" />
    <link href="plugins/flatpickr/custom-flatpickr.css" rel="stylesheet" type="text/css">
    <link href="plugins/flatpickr/flatpickr.css" rel="stylesheet" type="text/css">
    <script src="https://unpkg.com/feather-icons"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

</head>

<body>
    <!-- INICIO Barra de Menu principal -->

    <div class="header-container">
        <header class="header navbar navbar-expand-sm d-flex justify-content-between align-items-center">
            <a href="javascript:void(0);" class="sidebarCollapse" data-placement="bottom">
                <!-- Icono del menú -->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-menu">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </a>

            <div class="nav-logo align-self-center">
                <a class="navbar-brand" href="index.html">
                    <img alt="logo" src="assets/img/90x90.jpg">
                    <span class="navbar-brand-name">Prueba Tecnica</span>
                </a>
            </div>

            <ul class="navbar-item flex-row nav-dropdowns ml-auto">
                <li class="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
                    <a href="javascript:void(0);" class="nav-link dropdown-toggle user"
                        id="user-profile-dropdown" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <div class="media">
                            <div class="media-body align-self-center">
                                <h4 style="color: white; font-weight:600">Jorge Gomez</h4>
                                <p>Desarrollador Software</p>
                            </div>
                            <img src="assets/img/90x90.jpg" class="img-fluid" alt="admin-profile">
                        </div>
                    </a>
                </li>
            </ul>
        </header>
    </div>

    <!-- FINAL Barra de Menu principal -->

    <!-- INICIO Tabla de Informacion -->

    <div class="seperator-header layout-top-spacing">
        <h3 class="">Listado De Usuarios</h3>
    </div>

    <div class="row layout-spacing" style="text-align: center; justify-content: center;">
        <div class="container-fluid">
            <div class="row">
                <!-- Div con tabla y formulario -->
                <div class="col-md-7 p-2" style="background-color: #f9f9f9;">
                    <fieldset class="scheduler-border shadow p-3 mb-2 bg-white rounded">
                        <div class="statbox widget box box-shadow">
                            <div class="widget-content widget-content-area text-center" id="div_tablausuarios">
                                <div class="widget-content-area col-lg-12 mx-auto mt-2" style="border-bottom: solid 1px #d75151; border-radius: 5px; ">
                                    <h2 class="w-title text-center" style=" padding: 5px; color: #cd1616;">Lista De Usuarios
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users mb-2">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    </h2>
                                </div>
                                <div class="text-center">
                                    <button type="button" class="btn btn-outline-primary mt-3 mr-3" onclick="añadir_usuario()">Crear usuario nuevo
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="16"></line>
                                            <line x1="8" y1="12" x2="16" y2="12"></line>
                                        </svg></button>
                                </div>
                                <hr>
                                <table id="tabla_usuarios" class="table style-2 table-hover">
                                    <thead>
                                        <tr>
                                            <th class="text-center"></th>
                                            <th class="text-center">Perfil</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Correo</th>
                                            <th>Telefono</th>
                                            <th class="text-center">Estado</th>
                                            <th class="text-center dt-no-sorting">Acciones</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <form id="FormularioUser" class="pb-3 mt-2" style="display: none;">
                            <div class="widget-content-area col-lg-12 mx-auto mt-2" style="border-bottom: solid 1px #d75151; border-radius: 5px;">
                                <h2 class="w-title text-center" style=" padding: 5px; color: #cd1616;">Formulario Usuario
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit mb-2 ml-2">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </h2>
                            </div> <br><br>
                            <div class="container mt-4">
                                <div class="row">
                                    <!-- Foto de usuario -->
                                    <div class="col-md-4 text-center mb-4">
                                        <div class="card p-3 shadow-sm">
                                            <h4 class="text-center mb-2">Foto De Perfil
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera mb-2 ml-2">
                                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                                    <circle cx="12" cy="13" r="4"></circle>
                                                </svg>
                                            </h4>
                                            <hr> <br>
                                            <img id="previewFoto" src="assets/img/foto_user.jpg" alt="Foto" class="rounded-circle img-thumbnail mx-auto d-block" style="width: 200px; height: 200px; object-fit: cover;">

                                            <div class="d-flex justify-content-center mt-3">
                                                <!-- Botón seleccionar foto -->
                                                <button type="button" class="btn btn-outline-success rounded-circle mr-3" onclick="document.getElementById('foto_usuario').click()">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera">
                                                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                                        <circle cx="12" cy="13" r="4" />
                                                    </svg>
                                                </button>
                                                <!-- Botón eliminar foto -->
                                                <button type="button" class="btn btn-outline-danger rounded-circle" onclick="quitarFoto()">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                                                        <polyline points="3 6 5 6 21 6" />
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                        <line x1="10" y1="11" x2="10" y2="17" />
                                                        <line x1="14" y1="11" x2="14" y2="17" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <input type="file" id="foto_usuario" accept="image/*" class="form-control-file" style="display: none;" onchange="mostrarFoto(event)">
                                            <hr>
                                            <!-- Información del usuario debajo de la imagen -->
                                            <div class="mt-4 text-center">
                                                <h5 class="fw-bold" id="nombre_completo">Nombre completo</h5>
                                            </div>

                                        </div>
                                    </div>

                                    <!-- Formulario -->
                                    <div class="col-md-8">
                                        <div class="card p-4 shadow-sm">
                                            <h4 class="text-center mb-2">Datos Personales</h4>
                                            <hr> <br>

                                            <form id="FormularioUser">
                                                <input type="hidden" id="iduser">
                                                <div class="form-row">
                                                    <div class="form-group col-md-4">
                                                        <label>Primer nombre</label>
                                                        <input type="text" class="form-control" id="primer_nombre">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Segundo nombre</label>
                                                        <input type="text" class="form-control" id="segundo_nombre">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Primer apellido</label>
                                                        <input type="text" class="form-control" id="primer_apellido">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Segundo apellido</label>
                                                        <input type="text" class="form-control" id="segundo_apellido">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Tipo Documento</label>
                                                        <select class="form-control" id="tipo_documento">
                                                            <option selected></option>
                                                            <option value="(TI)">Tarjeta Identidad</option>
                                                            <option value="(CC)">Cédula De Ciudadania</option>
                                                            <option value="(RC)">Registro Civil </option>
                                                            <option value="(TE)">Tarjeta de Extranjería</option>
                                                            <option value="(CE)">Cédula de Extranjería</option>
                                                            <option value="(PP)"> Pasaporte</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>N° Documento</label>
                                                        <input type="number" class="form-control" id="numero_doc">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Fecha Nacimiento</label>
                                                        <input id="fecha_nacimiento" class="form-control flatpickr" type="text">
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Correo</label>
                                                        <div class="input-group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">@</span>
                                                            </div>
                                                            <input type="text" class="form-control" id="correo_usuario" placeholder="correo@mail.com">
                                                        </div>
                                                    </div>
                                                    <div class="form-group col-md-4">
                                                        <label>Teléfono</label>
                                                        <input type="number" class="form-control" id="telefono_usuario">
                                                    </div>
                                                </div>
                                                <br><br>
                                                <div class="text-center">
                                                    <button type="button" class="btn btn-outline-warning" onclick="volver()" id="volver_cons">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left mr-2">
                                                            <polyline points="9 14 4 9 9 4"></polyline>
                                                            <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
                                                        </svg> Volver
                                                    </button>
                                                    <button type="button" class="btn btn-outline-primary" id="guardar_usuario2" onclick="guardar_usuario()">Guardar datos
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle ml-2">
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                        </svg></button>
                                                    <button type="button" style="display: none;" id="actualizar_usuario2" class="btn btn-outline-primary" onclick="actualizar_usuario()">Modificar Datos
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle ml-2">
                                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                        </svg></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </fieldset>
                </div>
                <div class="col-md-5 ml-n3 d-flex align-items-center justify-content-center">
                    <img src="assets/img/fondo_prueba.png" alt="Imagen grande" style="max-width: 115%; max-height: 120%;">
                </div>
            </div>
        </div>
    </div>

    <script>
        feather.replace();
    </script>

</body>

<!-- Footer moderno con imagen de fondo ajustada -->
<footer style="
  background: url('assets/img/footer4.png') no-repeat center center;
  background-size: 100% 100%;
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
">
    <!-- Capa oscura encima de la imagen para contraste -->
    <div style="
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  "></div>

    <!-- Contenido del footer -->
    <div style="
    position: absolute;
    bottom: 30px;
    right: 40px;
    z-index: 2;
  ">
<h4 class="d-none d-md-block" style="color: white; font-weight: 600; margin: 0;">
  65 Años de Calidad y Confianza
</h4>

    </div>
</footer>

<script src="assets/js/libs/jquery-3.1.1.min.js"></script>
<script src="bootstrap/js/popper.min.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/scrollspyNav.js"></script>
<script src="plugins/sweetalerts/sweetalert2.min.js"></script>
<script src="plugins/sweetalerts/custom-sweetalert.js"></script>
<script src="assets/js/prueba/prueba_tecnica.js"></script>
<script src="plugins/perfect-scrollbar/perfect-scrollbar.min.js"></script>
<script src="assets/js/app.js"></script>
<script src="assets/js/custom.js"></script>
<script src="plugins/table/datatable/datatables.js"></script>
<script src="plugins/flatpickr/custom-flatpickr.js"></script>
<script src="plugins/flatpickr/flatpickr.js"></script>

<script>
    var f1 = flatpickr(document.getElementById('fecha_nacimiento'));
</script>

</html>