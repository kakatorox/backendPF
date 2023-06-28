const express = require('express')
require('dotenv').config();
const routes = require('./src/routes/routes')
const cors = require('cors');
const helmet = require('helmet');

const app = express()
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`La aplicación se está ejecutando en el puerto ${port}!`));
// const whitelist = ["http://localhost:3000", "http://127.0.0.1:3000","https://master--elegant-cassata-382c2f.netlify.app/"];

// const corsOptions = {
//     origin: function (origin, callback){
//             if(whitelist.indexOf(origin) !== -1 || !origin){
//                 callback(null, true);
//             } else {
//                 callback(new error("no permitido por CORS"))
//             }
//         }
// };

// app.use(cors(corsOptions));
// app.use(cors());
// app.options('*', cors(corsOptions));
// app.use(helmet());

// app.use(express.json());
// app.use(routes);

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));