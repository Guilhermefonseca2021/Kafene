const mongoose = require('mongoose')
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASSWORD

async function connectDataBase() {
    await mongoose
        .connect(
            'mongodb+srv://gsbloogs194:1FMwBznOo9HxB9HC@nodesystem.kyzz3ns.mongodb.net/?retryWrites=true&w=majority'
        )
}

module.exports = connectDataBase