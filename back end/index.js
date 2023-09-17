const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());


// controllers
const createUser = require('./controllers/managerUser');


// routes
app.use('/create_user', createUser)

// database
const connectDataBase = require("./database/connect");

connectDataBase()
    .then(() => { console.log('Conectado ao banco')})
    .catch((error) => console.log(`Houve um erro ${error}`));

app.listen(3333, console.log("servidor online"))
