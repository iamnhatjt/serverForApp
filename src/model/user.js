const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user = new Schema({
    username: String,
    password: String,
    email: String
})

module.exports = mongoose.model('userLogin', user)