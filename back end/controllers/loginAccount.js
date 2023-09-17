const connectDataBase = require('../database/connect')

const User = require('../models/userAccount')

async function login({nome, email, password}) {
    const database = await connectDataBase()
    
    let myUser = null
    if(myUser) {
        // checar no banco de dados se existe esse usuario
        user = await database.collection('usuarios').findOne({myUser})
    } else {
        return console.log('error')
    }

    return myUser;

}

