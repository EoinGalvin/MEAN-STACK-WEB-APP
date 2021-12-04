var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Game = mongoose.model('Game');
const User = mongoose.model('User');

const gameCtrl = require('../controllers/games');
const userApiCtrl = require('../../app_api/controllers/users');
const userCtrl = require('../controllers/users');


/* GET game page. */
router.get('/games', function(req, res) {
  gameCtrl.getGamesList(req,res,false);
});

/* POST FROM GAME PAGE TO ORDER GAMES BY PRICE*/
router.post('/games', function(req,res){
  if(req.body.ordered == "on")
  {
    gameCtrl.getGamesList(req,res,true);
  }
  else{
gameCtrl.getGamesList(req,res,false);
  }
});

/* GET individual game page */
router.get('/games/:gameid',function(req,res){
  gameCtrl.gamedata(req,res);
});

/* get login page */
router.get('/login',function(req,res){
userCtrl.renderLogin(req,res);
})
/* POST user sign in email and password*/
router.post('/login', function(req,res,next) {
  userApiCtrl.validateLogin(req,res);
  });

/* get registration page */
router.get('/register',function(req,res){
  res.render('register');
})

/* get home page */
router.get('/',function(req,res){
  res.render('homepage');
});





module.exports = router;
