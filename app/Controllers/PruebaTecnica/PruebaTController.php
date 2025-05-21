<?php

namespace App\Controllers\PruebaTecnica;

use App\Controllers\BaseController;
use App\Models\PruebaTModel;

class PruebaTController extends BaseController
{

    public function get_usuarios()
    {
        try {
            $usuariosModel = new \App\Models\PruebaTModel();
            $usuarios = $usuariosModel->get_usuarios();
            return $this->response->setJSON($usuarios)->setStatusCode(200);
        } catch (\Exception $e) {
            // Siempre usar un código HTTP válido
            return $this->response->setStatusCode(500)->setJSON([
                'error' => true,
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function getUsuarioById($id)
    {
        $usuarioModel = new PruebaTModel();
        $data = $usuarioModel->getUsuarioById($id);
        return $this->response->setJSON($data);
    }

    public function guardar_usuario()
    {
        // Cargar el modelo
        $usuarioModel = new PruebaTModel();

        // Obtener los datos del formulario
        $data = [
            'primer_nombre'    => $this->request->getPost('primer_nombre'),
            'segundo_nombre'   => $this->request->getPost('segundo_nombre'),
            'primer_apellido'  => $this->request->getPost('primer_apellido'),
            'segundo_apellido' => $this->request->getPost('segundo_apellido'),
            'correo_usuario'   => $this->request->getPost('correo_usuario'),
            'tipo_doc'         => $this->request->getPost('tipo_documento'),
            'numero_doc'       => $this->request->getPost('numero_doc'),
            'telefono_usuario' => $this->request->getPost('telefono_usuario'),
            'fecha_nacimiento' => $this->request->getPost('fecha_nacimiento'),
            'estado_usuario'   => 1
        ];

        // Procesar la foto si se cargó
        $foto = $this->request->getFile('foto_usuario');

        if ($foto && $foto->isValid() && !$foto->hasMoved()) {
            // Ruta de destino
            $ruta = 'uploads/usuarios/';
            if (!is_dir(FCPATH . $ruta)) {
                mkdir(FCPATH . $ruta, 0777, true);
            }

            // Nombre único para evitar sobreescritura
            $nombreFoto = uniqid('foto_') . '.' . $foto->getExtension();
            $foto->move(FCPATH . $ruta, $nombreFoto);

            // Guardar la ruta en el arreglo (solo la ruta relativa)
            $data['img_usuario'] = $ruta . $nombreFoto;
        }

        // Insertar en la base de datos
        if ($usuarioModel->insert($data)) {
            return $this->response->setJSON([
                'status' => 200,
                'message' => 'Usuario guardado correctamente'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 500,
                'message' => 'Error al guardar en la base de datos'
            ]);
        }
    }

    public function actualizar_usuario()
    {
        $usuarioModel = new PruebaTModel();

        // Obtener el ID del usuario
        $id_usuario = $this->request->getPost('id_usuario');

        if (!$id_usuario) {
            return $this->response->setJSON([
                'status' => 400,
                'message' => 'ID de usuario no proporcionado'
            ]);
        }

        // Obtener los datos del formulario
        $data = [
            'primer_nombre'    => $this->request->getPost('primer_nombre'),
            'segundo_nombre'   => $this->request->getPost('segundo_nombre'),
            'primer_apellido'  => $this->request->getPost('primer_apellido'),
            'segundo_apellido' => $this->request->getPost('segundo_apellido'),
            'correo_usuario'   => $this->request->getPost('correo_usuario'),
            'tipo_doc'         => $this->request->getPost('tipo_documento'),
            'numero_doc'       => $this->request->getPost('numero_doc'),
            'telefono_usuario' => $this->request->getPost('telefono_usuario'),
            'fecha_nacimiento' => $this->request->getPost('fecha_nacimiento'),
        ];

        // Procesar la nueva foto si se cargó
        $foto = $this->request->getFile('foto_usuario');

        if ($foto && $foto->isValid() && !$foto->hasMoved()) {
            $ruta = 'uploads/usuarios/';
            if (!is_dir(FCPATH . $ruta)) {
                mkdir(FCPATH . $ruta, 0777, true);
            }

            $nombreFoto = uniqid('foto_') . '.' . $foto->getExtension();
            $foto->move(FCPATH . $ruta, $nombreFoto);
            $data['img_usuario'] = $ruta . $nombreFoto;
        }

        // Actualizar el usuario en la base de datos
        if ($usuarioModel->update($id_usuario, $data)) {
            return $this->response->setJSON([
                'status' => 200,
                'message' => 'Usuario actualizado correctamente'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 500,
                'message' => 'Error al actualizar el usuario en la base de datos'
            ]);
        }
    }

    public function eliminar_usuario($id = null)
    {
        $usuarioModel = new PruebaTModel();

        if ($id === null) {
            return $this->response->setJSON([
                'status' => 400,
                'message' => 'ID de usuario no proporcionado'
            ]);
        }

        // Verifica si el usuario existe
        $usuario = $usuarioModel->find($id);
        if (!$usuario) {
            return $this->response->setJSON([
                'status' => 404,
                'message' => 'Usuario no encontrado'
            ]);
        }

        // Si existe una imagen, eliminarla también
        if (!empty($usuario['img_usuario']) && file_exists(FCPATH . $usuario['img_usuario'])) {
            unlink(FCPATH . $usuario['img_usuario']);
        }

        // Eliminar el usuario
        if ($usuarioModel->delete($id)) {
            return $this->response->setJSON([
                'status' => 200,
                'message' => 'Usuario eliminado correctamente'
            ]);
        } else {
            return $this->response->setJSON([
                'status' => 500,
                'message' => 'No se pudo eliminar el usuario'
            ]);
        }
    }
}
