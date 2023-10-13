// const connectDataBase = require('../database/connect')
const UserSchema = require('../models/userAccount')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function loginAnthentication(request, response) {
    const { email, password } = request.body
    
    // validator
    if(!email) {
        return response.status(422).json({ msg: 'O email é obrigatorio'})
    }

    if(!password) {
        return response.status(422).json({ msg: 'Senha é obrigatorio'})
    }

    // check if user exists 
    const user = await UserSchema.findOne({ email })
    
    if(!user) {
        return response.status(422).json({ msg: 'Email ou senha incalidos.'})
    }

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if(!checkPassword) {
        return response.status(422).json({ msg: 'Senha invalida!.'})
    }

    try {
        // find my hash to Login user
        const token = jwt.sign({ id: user.id}, process.env.JWT_PASS ?? '', { 
            expiresIn: '7d',
        })

        console.log(token)

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

}

module.exports = loginAnthentication;