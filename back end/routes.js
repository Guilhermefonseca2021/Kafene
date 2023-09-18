const routes = require('express').Router();
const createUser = require('./controllers/createUser')
const loginAuthentication = require('./controllers/loginAccount')

routes.post('/create_user', createUser)

routes.post('/login', loginAuthentication)

module.exports = routes;