const connectDataBase = require('../database/connect')

const User = require('../models/userAccount')

async function login({email, password}) {
    const database = await connectDataBase()
    
    let myUser = null
    if(myUser) {
        // checar no banco de dados se existe esse usuario
        user = await database.collection('usuarios').findOne({myUser})
    } else {
        return console.log('e-mail ou senha esta errado.')
    }

    return myUser;
}

