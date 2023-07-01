const {Router} = require('express')

const route = Router()

//Importar el controlador
const {getRol, postRol, putRol, deleteRol} = require('../controllers/rol')
const  {isAuthenticated}  = require('../controllers/auth')

route.get('/',isAuthenticated, getRol)

route.post('/',isAuthenticated, postRol)

route.put('/', putRol)

route.delete('/', deleteRol)


module.exports = route   
