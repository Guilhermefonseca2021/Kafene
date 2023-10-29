require('dotenv/config')

module.exports = {
    secret: process.env.JWT_PASS,
    expiresIn: '7d'
}