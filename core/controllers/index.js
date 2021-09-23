function home(req, res) {
  res.send('Home');
}

function contact(req, res) {
  res.send('Contact');
}

module.exports.home = home;
module.exports.contact = contact;
