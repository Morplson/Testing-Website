

exports.fingerprint = function(req, res, next) {
	
    let vid = req.body.visitorId;

    console.log( vid );
	
    res.json({status:"OK"})
}