function createShop(req, res) {
    let Shop = require('../models/shop');
    let newShop = Todo ({
        title: req.body.title,
        description : req.body.description,
        description : req.body.description,
        price : req.body.price,
        url : req.body.url,
        createdAt : req.body.createdAt,
        createdBy : req.body.createdBy,
        updatedAt : req.body.updatedAt,
        updatedBy : req.body.updatedBy,
        deletedAt : req.body.deletedAt,
        deletedBy : req.body.deletedBy
    });
  
    newShop.save()
    .then((savedShop) => {

        res.json(savedShop);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

module.exports.create = createShop;
