var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('internal/login.ejs', { title: 'Express' });
});

router.get('/ListUserInfo', function(req, res, next) {
  res.render('internal/ListUserInfo.ejs');
});

module.exports = router;
