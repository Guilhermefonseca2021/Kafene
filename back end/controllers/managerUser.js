const router = require('express').Router();


router.post('/', async(request, response) => {
    var data = request.body;

    return response.json({
        error: false, 
        message: 'Enviado com sucesso',
        data
    })
})

module.exports = router;