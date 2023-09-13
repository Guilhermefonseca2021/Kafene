const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());


// controllers
const createUser = require('./controllers/managerUser');


// routes
app.use('/login', createUser)

app.listen(3333, console.log("servidor online"));
