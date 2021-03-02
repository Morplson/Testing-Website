exports.index = function(req, res, next) {
	let fingerprint = req.fingerprint;
	
	res.render('index', { title: 'Hello World!', fingerprint: JSON.stringify(fingerprint) });
}

exports.bingus = function(req, res, next) {
	
	res.render('bingus', { title: 'Bingus'});
}


exports.trolled = function(req, res, next) {
	
	res.render('trolled', { title: 'LOL'});
}