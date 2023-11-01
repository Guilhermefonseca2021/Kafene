// const connectDataBase = require('../database/connect')
const UserSchema = require('../models/userAccount')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const authConfig = require('../config/auth')

async function loginAuthentication(request, response) {
    const { email, password } = request.body
    
    if(!email) {
        return response.status(422).json({ msg: 'O email é obrigatorio'})
    }

    if(!password) {
        return response.status(422).json({ msg: 'Senha é obrigatorio'})
    }

    const user = await UserSchema.findOne({ email })

    if(!user) {
        return response.status(422).json({ msg: 'Email ou senha invalidos.'})
    }

    // compare my passsword from body with my cripted hash from de database
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return response.status(422).json({ msg: 'Email ou senha invalidos!.'})
    }

    try {
        const token = jwt.sign({ id: user.id }, authConfig.secret ?? '', { 
            expiresIn: authConfig.expiresIn,
        })
        // rename my password to _ bc i won t use, and take the rest of the user to a created const
        const { password: _, ...UserLogin } = user

        return response.json({
            user: UserLogin,
            token: token
        }) 
        
    } catch(error) {
        console.log(error)
    }
}

async function getProfile(request, response) {
    return response.json(request.user)
}
 
module.exports = {
    loginAuthentication,
    getProfile
}; 