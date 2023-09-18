const UserSchema = require('../models/userAccount')
// const bcrypt = require('bcrypt')

async function createUSer(request, response) {
    var user = request.body;

    // check if user exists 
    const userExists = await UserSchema.findOne({ email: user.email })
    
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

    // create password + salt(hash para o usuario)
    // const salt = await bcrypt.genSalt((12))
    // const passwordHash = await bcrypt.genSalt(password, salt)
    
    // create user
    // const userValidator = new User({
    //     name,
    //     email,
    //     password: passwordHash,
    // })
    
    const dataUser = await UserSchema.create(user)
        .then(() => {
            return response.status(201).json({
                message: 'Enviado com sucesso',
                dataUser
            })
        })
        .catch((error) => {
            return response.status(400).json({
                error: error, 
                message: `Houve um problema ${error}`,
            })
        });
}

module.exports = createUSer;