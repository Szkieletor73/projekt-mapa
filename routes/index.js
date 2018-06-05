var express = require('express');
var router = express.Router();

/* route home page */
router.get('/', function(req, res, next) {
  res.render('pages/front', { brand: 'Twoja Firma' });
});

/* route gallery */
router.get('/gallery', function(req, res, next) {
  res.render('pages/gallery', { brand: 'Twoja Firma', title: 'Gallery' });
});

/* route contact */
router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { brand: 'Twoja Firma', title: 'Contact' });
});

module.exports = router;
