const { Router } = require('express');

const postLogin = require('../controllers/login/postLogin')
const postLoginSeller = require('../controllers/login/postLoginSeller')

const getListUser = require('../controllers/usuario/getListUser')
const postUser = require('../controllers/usuario/postUser')
const getUserById = require('../controllers/usuario/getUserById')
const putUser = require('../controllers/usuario/putUser')
const getAddress = require('../controllers/direccion/getAddress')
const putAddress = require('../controllers/direccion/putAddress')
const postAddress = require('../controllers/direccion/postAddress')
const postSeller = require('../controllers/vendedor/postSeller')
const getSellerById = require('../controllers/vendedor/getSellerById')
const putSeller = require('../controllers/vendedor/putSeller')
const getListproducts = require('../controllers/productos/getListproducts')
const postproducts = require('../controllers/productos/postproducts')
const getProductsById = require('../controllers/productos/getProductsById')
const getProductsByMarca = require('../controllers/productos/getProductsByMarca')
const getProductsBySearch = require('../controllers/productos/getProductsBySearch')
const putProducts = require('../controllers/productos/putProducts')
const deleteProducts = require('../controllers/productos/deleteProducts')

const postCategory = require('../controllers/categoria/postCategory')
const putCategory = require('../controllers/categoria/putCategory')
const deleteCategory = require('../controllers/categoria/deleteCategory')
const getListCategory = require('../controllers/categoria/getListCategory')
const postCompras = require('../controllers/compras/postCompras')
const getComprasByIdUser = require('../controllers/compras/getComprasByIdUser')

const routes = new Router();

// routes.post('/usuarios', postUsuarios);
routes.post('/login', postLogin);
routes.post('/loginSeller', postLoginSeller);
//usuario
routes.get("/usuario/listado", getListUser);
routes.post("/usuario/crear", postUser);
routes.get("/usuario/mostrar/:id", getUserById);
routes.put("/usuario/actualizar/", putUser);
//direccion
routes.put("/direccion/actualizar_direccion/", putAddress );
routes.post("/direccion/crear/", postAddress);
routes.get("/direccion/listado/:id", getAddress);
//vendedor
routes.post("/vendedor/crear", postSeller );
routes.get("/vendedor/mostrar/:id", getSellerById);
routes.put("/vendedor/actualizar/", putSeller);
//Produtos 
routes.get("/productos/listado", getListproducts);
routes.post("/productos/crear", postproducts);
routes.get("/productos/mostrar/:id", getProductsById);
routes.get("/productos/mostrarbyMarca/:marca", getProductsByMarca);
routes.put("/productos/actualizar", putProducts);
routes.get("/productos/search/:search", getProductsBySearch);
routes.delete("/productos/eliminar/:id", deleteProducts);
//categoria
routes.post("/categoria/crear", postCategory);
routes.put("/categoria/actualizar", putCategory);
routes.delete("/categoria/delete", deleteCategory);
routes.get("/categoria/listado", getListCategory);
//comptas
routes.post("/compras/crear", postCompras);
routes.get("/compras/listadobyUser/:id", getComprasByIdUser);

module.exports = routes;