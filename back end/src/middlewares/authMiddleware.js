const UserSchema = require('../models/userAccount')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth')

async function authMiddleware(request, response, next) {
    const { authorization } = request.headers

    if(!authorization) {
        return response.status(401).json({ error: 'Nao autorizado '})
    }

    const token = authorization.split(" ")[1]

    const { id } = jwt.verify(token, authConfig.secret ?? '')

    const user = await UserSchema.findById(id) 

    if(!user) {
        return response.status(422).json({ msg: 'Nao autorizado.'})
    }

    const { password, _, ...loggedUser } = user

    request.user = loggedUser

    next()
}

module.exports = {
    authMiddleware
}