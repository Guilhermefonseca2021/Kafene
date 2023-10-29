const routes = require('express').Router();
const { createUser } = require('./src/controllers/CreateUserController')
const { loginAnthentication, getProfile } = require('./src/controllers/LoginUserController')

routes.post('/register', createUser)
routes.post('/login', loginAnthentication)
routes.get('/profile', getProfile)


module.exports = routes;