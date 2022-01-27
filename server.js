//NPM PCKGS
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const dotenv = require('dotenv')
const morgan = require('morgan')

dotenv.config()

const app = express()
const port= 8888 || process.env.PORT

//LOCAL REQS
const mongoConnection = require('./config')

const blogRoute = require('./routes/blogRoute')
const authRouter = require('./routes/authRoute')

app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/blog', blogRoute)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: "API UP!"})
})


app.listen(port, () => {
    mongoConnection()
    console.log(`SERVER LISTENING AT ${port} !!!`)
})