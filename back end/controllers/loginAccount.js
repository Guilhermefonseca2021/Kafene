// const connectDataBase = require('../database/connect')
const UserSchema = require('../models/userAccount')

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
    const user = await UserSchema.findOne({ email: user.email })
    
    if(!user) {
        return response.status(422).json({ msg: 'Usuario nao encontrado.'})
    }

    // check if password match
    const checkPassword = await UserSchema.compare(password, user.password)

    if(!checkPassword) {
        return response.status(422).json({ msg: 'Senha invalida!.'})
    }

    try {

    } catch(error) {
        console.log(error)
    }
}   

module.exports = loginAnthentication;