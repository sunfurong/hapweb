var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home',{});
});
router.get('/images',function(reg,res,next){
  res.render('secondViews/images',{});
});
router.get('/medias',function(reg,res,next){
  res.render('secondViews/medias',{});
});
router.get('/words',function(reg,res,next){
  res.render('secondViews/words',{});
});
module.exports = router;
