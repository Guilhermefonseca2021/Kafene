const express = require("express");
const app = express();
const routes = require('./routes')
const config = require('./src/config/database')

const cors = require("cors");

app.use(express.json());
app.use(cors());


// routes
app.use(routes)

// database
const connectDataBase = require('./src/database/connect');

connectDataBase()
    .then(() => { console.log('Conectado ao banco')})
    .catch((error) => console.log(`Houve um erro ${error}`));


// server
app.listen(config.port, console.log("Servidor online"))
