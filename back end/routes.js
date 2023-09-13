const router = require('express').Router();
const managerUser = require('./controllers/managerUser')


router.use('/users', managerUser)

module.exports = router