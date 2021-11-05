const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 5000

const router = require('./src/router/index')
const callapi = require('./src/router/callapi')
const cookieParser = require('cookie-parser')

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    maxAge: '1728000'
        // this item is set specifically for cross-domain purposes 
}

// middle ware
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors(corsOptions))



//  connected database
mongoose.connect('mongodb+srv://nhatjt:1234@cluster0.n2ggj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log('sever was connected to mongodb!')
        app.listen(port, () => {
            console.log('sever listen on www!')
        })
    }).catch(err => {
        console.log('that bai')
    })

// router

app.use('/post', router)
app.use('/api', callapi)

app.get('/1', (req, res, next) => {
    res.json(req.cookies)
})