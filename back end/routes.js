const routes = require('express').Router();
const createUser = require('./controllers/createUser')


routes.post('/create_user', createUser)

module.exports = routes;