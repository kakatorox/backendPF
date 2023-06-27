const pool = require('../../utils/dbConector.js');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const postLogin = async (req, res, next) => {
    console.log("ingreso login")
    const  privateKey =  process.env.SECRETO
  
    try {
        const data = req.body;
        const agregarPost = async () => {
            const correo = data.correo;  
            const contrasena = data.contrasena;
            const values = [correo];
            console.log(correo)
            console.log(contrasena)
            const consulta = "SELECT * FROM usuario INNER JOIN direccion ON usuario.id_usuario=direccion.id_usuario where usuario.correo = $1";
            const { rows: [usuario], rowCount } = await pool.query(consulta, values);
            usuario.tipo = "usuario"

  
            console.log(usuario);
           
          
            const { contrasena: passwordEncriptada } = usuario;
            console.log(passwordEncriptada)
           
            const passwordEsCorrecta = bcrypt.compareSync(contrasena, passwordEncriptada);

            
            console.log(usuario)
            if (!passwordEsCorrecta || !rowCount){
                 res.status(401).json({'statusCode': 401, 'message': "Email o contraseña incorrecta"});
            }
             const token = jwt.sign({usuario}, privateKey ,{ expiresIn: 30 });        
             console.log("Login exitoso");      
             res.status(200).json({'statusCode': 200, 'message': "Autenticado correctamente",'jwt_token':token});     
        

        }
        agregarPost();
     } catch (error) {
         console.log(error.message);
         res.status(500).json({'statusCode': 500, 'message': "error inesperado"});
     }
}


module.exports = postLogin;