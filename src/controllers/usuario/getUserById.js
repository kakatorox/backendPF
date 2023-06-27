const pool = require('../../utils/dbConector.js');

const getUserById = async (req, res) => {

 // const bearerHeader = req.headers['authorization'];
  console.log(bearerHeader)
      try {
          const obtenerUsuarioID = async () =>{
          const { id } = req.params
          const consulta = 'SELECT * FROM public.usuario where id_usuario =  $1' 
          const values = [id]
          const {rows} = await pool.query(consulta, values)
          console.log(rows)
          return rows
        }    
        const result = await obtenerUsuarioID()
        res.json(result)
      } catch (error) {
          console.log(error.message);
         return res.status(500).send(error.message);
      }
}

module.exports = getUserById;