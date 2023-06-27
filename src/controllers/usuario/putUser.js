const pool = require('../../utils/dbConector.js');

const putUser = async (req, res) => {

        try {
            const actualizarUsuario = async () =>{
                  const {nombres, apellido_paterno, apellido_materno, celular, contrasena, tipo, rut, correo, sexo, fecha_nacimiento, id} = req.body 
                  const values = [nombres, apellido_paterno, apellido_materno, celular, contrasena, tipo, rut, correo, sexo, fecha_nacimiento, id]
                  const consulta = "UPDATE public.usuario SET nombres= $1, apellido_paterno= $2, apellido_materno= $3, celular= $4, contrasena= $5, tipo= $6, rut= $7, correo= $8, sexo= $9, fecha_nacimiento=$10 WHERE id_usuario= $11 "
                  const { rowCount } = await pool.query(consulta, values)
                  console.log('actualizo')
                  return rowCount
            }
            const result = await actualizarUsuario()
            const resp = {}
            if (result === 1) { resp.message = "usuario modificado" }
            if (result === 0) { resp.message = "usuario no modificado" }
            console.log(resp)
            res.json(resp)
    
      
   
       } catch (error) {
           console.log(error.message);
         return res.status(500).send(error.message);
       }
}

module.exports = putUser;