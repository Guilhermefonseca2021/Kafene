const router = require('express').Router();
const managerUser = require('./controllers/managerUser')


router.use('/create_user', managerUser)

module.exports = router