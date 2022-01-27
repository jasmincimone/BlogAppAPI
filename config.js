const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(process.env.MONGO_URI, {
        useNewURLParser: true
    })
    await mongoose.connection 
    console.log('MONGO DB CONNECTED!')
}

module.exports = main