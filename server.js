const port = 6900
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

//set and use things from express
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

// Routes

app.get('/', (req, res) => {
    res.send("Hack the Mainframe")
})

app.listen(port)

