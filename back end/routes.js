const routes = require('express').Router();
const createUser = require('./controllers/UserController')
const loginAuthentication = require('./controllers/LoginController').loginAnthentication

routes.post('/create_user', createUser)

routes.post('/login', loginAuthentication)

module.exports = routes;