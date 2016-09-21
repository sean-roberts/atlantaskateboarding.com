var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('blackblocks', {
        title: 'Atlanta Skateboarding - Georgia Skateboarding',
        layout: 'splash'
    });
    // res.render('splash', {
    //     title: 'Atlanta Skateboarding - Georgia Skateboarding',
    //     layout: 'splash'
    // });
});

module.exports = router;
