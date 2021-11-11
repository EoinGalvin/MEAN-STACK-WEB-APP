var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const gameCtrl = require('../controllers/games');


/* GET game page. */
router.get('/games', function(req, res, next) {
  gameCtrl.getGamesList(req,res);
});

/* GET individual game page */
router.get('/games/:gameid',function(req,res){
  gameCtrl.gamedata(req,res);
});

/* get login page */
router.get('/login',function(req,res){
  res.render('login');
})

/* get registration page */
router.get('/register',function(req,res){
  res.render('register');
})

/* get home page */
router.get('/',function(req,res){
  res.render('homepage');
});



module.exports = router;
