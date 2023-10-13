const routes = require('express').Router();
const createUser = require('./controllers/CreateUserController')
const loginAnthentication = require('./controllers/LoginUserController')

routes.post('/create_user', createUser)

routes.post('/login', loginAnthentication)
module.exports = routes;