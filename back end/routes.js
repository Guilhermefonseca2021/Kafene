const routes = require('express').Router();
const { createUser } = require('./src/controllers/CreateUserController')
const { loginAuthentication, getProfile } = require('./src/controllers/LoginUserController')
const { authMiddleware } = require('./src/middlewares/authMiddleware')

routes.post('/register', createUser)
routes.post('/login', loginAuthentication)

routes.use(authMiddleware)

routes.get('/contact', getProfile)


module.exports = routes;