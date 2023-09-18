const UserSchema = require('../models/userAccount')
const bcrypt = require('bcrypt')

async function createUser(request, response) {
    const { name, email, password } = request.body;

    // check if user exists 
    const userExists = await UserSchema.findOne({ email })
    
    if(userExists) {
        return response.status(422).json({ msg: 'Esse e-mail ja esta em uso.'})
    }

    // validator
    if(!email) {
        return response.status(422).json({ msg: 'O email é obrigatorio!'})
    }

    if(!password) {
        return response.status(422).json({ msg: 'A Senha é obrigatoria!'})
    }   
    
    const hashPassword = await bcrypt.hash(password, 10)
    
    const newUser = await UserSchema.create({
        name,
        email,
        password: hashPassword
    })
        // .then(() => {
        //     return response.status(201).json({
        //         message: 'Enviado com sucesso',
        //         newUser
        //     })
        // })
        // .catch((error) => {
        //     return response.status(400).json({
        //         error: error, 
        //         message: `Houve um problema ${error}`,
        //     })
        // }); 
    const { password: _, ...user } = newUser

    return response.status(200).json(user._doc)
}

module.exports = createUser;