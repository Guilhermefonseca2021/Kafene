const router = require('express').Router();
const UserSchema = require('../models/userAccount')


router.post('/', async(request, response) => {
    var user = request.body;

    const dataUser = await UserSchema.create(user)
        .then(() => {
            return response.status(201).json({
                message: 'Enviado com sucesso',
                dataUser
            })
        })
        .catch((error) => {
            return response.status(201).json({
                error: error, 
                message: 'Houve algum problema',
                dataUser
            })
        });
})

module.exports = router;