// var notes = require('../controllers/notes.js')
var path = require('path')
module.exports = function(app) {
	// app.get('/notes',function(req,res){
	//     notes.getAll(req,res)
	// })

	app.all('*', (req, res, next) => {
		res.sendFile(path.resolve('./client/dist/index.html'))
		next()
	})
}
