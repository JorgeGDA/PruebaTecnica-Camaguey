<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');


// CONTROLADOR PRUEBA TECNICA

$routes->group('PruebaTecnica', ['namespace' => 'App\Controllers\PruebaTecnica'], function($routes) {
    $routes->get('get_usuarios', 'PruebaTController::get_usuarios');
    $routes->get('getUsuarioById/?(:num)?', 'PruebaTController::getUsuarioById/$1');
    $routes->post('guardar_usuario', 'PruebaTController::guardar_usuario');
    $routes->post('actualizar_usuario/?(:num)?', 'PruebaTController::actualizar_usuario/$1');
    $routes->post('eliminar_usuario/?(:num)?', 'PruebaTController::eliminar_usuario/$1');
});


