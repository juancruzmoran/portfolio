const controller = {
	index: (req, res) => {
		// render views
		return res.render('home')
    },
	info : (req,res) => {
		return res.render('informacion')
	}

}

module.exports = controller;