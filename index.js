const express = require('express')
require('dotenv').config();
const routes = require('./src/routes/routes')
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = process.env.PORT || 8080;

const whitelist = ["http://localhost:3000", "http://127.0.0.1:3000", "https://frontpf2.onrender.com","https://front-pf-dusky.vercel.app/"];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`La aplicación se está ejecutando en el puerto ${port}!`));