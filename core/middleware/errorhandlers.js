function notFound(req, res, next){

	res.status(404).send('Unavailable address');

};

module.exports.notFound = notFound;
