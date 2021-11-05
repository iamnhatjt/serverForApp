const mongoose = require('mongoose')
const Schema = mongoose.Schema

const data = new Schema({
    for: String,
    dataBase: Array,
    label: Array
})

module.exports = mongoose.model('data', data)