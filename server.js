var express = require('express')
var app = express()
// var mongoose = require('mongoose')
// require Model
var routes = require('./server/config/routes.js')
var bodyparser = require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/client/dist'))
app.use(express.static(__dirname + '/client/static'))
// mongoose.connect('mongodb://localhost/anonQuotes')

routes(app)

app.listen(8080, function() {
	console.log('Server running on port 8080')
})
