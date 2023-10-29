require('dotenv/config')

module.exports = {
    port: process.env.PORT | 3333, 
    url: process.env.MONGODB_URL
}