const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    birthday: {type: Date, required: true},
    age: {Number}
})

const user = mongoose.model('User', userSchema)

module.exports = user