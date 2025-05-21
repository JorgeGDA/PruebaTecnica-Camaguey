<?php

namespace App\Models;

use CodeIgniter\Model;

class PruebaTModel extends Model
{
    protected $table      = 'prueba_camaguey.usuarios_camaguey';
    protected $primaryKey = 'id_usuario';

    protected $allowedFields = [
        'primer_nombre',
        'segundo_nombre',
        'primer_apellido',
        'segundo_apellido',
        'telefono_usuario',
        'valor_ingresos',
        'tipo_doc',
        'numero_doc',
        'img_usuario',
        'correo_usuario',
        'estado_usuario',
        'fecha_nacimiento'
    ];

    protected $useTimestamps = false;


    public function get_usuarios()
    {
        $query = $this->db->table('prueba_camaguey.usuarios_camaguey c')
            ->select('c.*')
            ->get();

        $resultado = $query->getResultArray();
        return $resultado;
    }

    public function getUsuarioById($id_usuario)
    {
        return $this->where('id_usuario', $id_usuario)->first();
    }
}
