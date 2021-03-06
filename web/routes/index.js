exports.index = function(req, res, next) {
	let fingerprint = req.fingerprint;
	
	res.render('index', { title: 'Hello World!', fingerprint: JSON.stringify(fingerprint) });
}