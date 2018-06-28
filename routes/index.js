var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/invest', (req, res) => {
  res.render('invest');
})

router.get('/contact-us', (req, res) => {
  res.render('contact-page');
})

router.get('/faq', (req, res) => {
  res.render('faq');
})

router.get('/about-us', (req, res) => {
  res.render('about-us');
})

router.get('/buy', (req, res) => {
  res.render('buy');
})

module.exports = router;
