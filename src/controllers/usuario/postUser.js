const pool = require('../../utils/dbConector.js');
const bcrypt = require('bcryptjs');

const postUser = async (req, res) => {
  try {
    const insertUsaurio = async () => {
      let resp = {};
      const { nombres, apellido_paterno, apellido_materno, celular, contrasena, rut, correo, fecha_nacimiento, sexo, region, ciudad, comuna, calle, numero, descripcion } = req.body
      const passwordEncriptada = bcrypt.hashSync(contrasena);
      const consulta = "INSERT INTO usuario values (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9) returning id_usuario"
      const selectRut = "SELECT rut FROM usuario where rut = $1";
      const existe = await pool.query(selectRut, [ rut]);
      if (existe.rowCount > 0){
        resp ={
          "statusCode": 409,
          "message":'Usuarios ya existe'
        };
        return res.status(resp.statusCode).send(resp.message);
      }
      const values = [nombres, apellido_paterno, apellido_materno, celular, passwordEncriptada, rut, correo, sexo, fecha_nacimiento]
      const result = await pool.query(consulta, values)
      const id = result.rows[0];
      if (id.id_usuario) {
        const consultadomi = 'INSERT INTO direccion  values(default , $1, $2 ,$3 ,$4 ,$5 ,$6, $7)';
        const valuesdomi = [region, ciudad, comuna, calle, numero, descripcion, id.id_usuario]
        const resultdomi = await pool.query(consultadomi, valuesdomi)
        if (resultdomi.rowsCount === 0) {
          await pool.query('DELETE FROM usuario WHERE id_usuario =' + id.id_usuario);
        }
        resp ={
          "statusCode": 200,
          "message":'Usuarios creado'
        };
        return res.status(resp.statusCode).send(resp.message);
      }
      return res.status(500).send('error inesperado');
      
    }
    insertUsaurio()
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
}

module.exports = postUser;