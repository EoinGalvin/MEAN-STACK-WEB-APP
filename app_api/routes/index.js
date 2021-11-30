var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const GameApiCtrl = require('../controllers/games');
const GameAppCtrl = require('../../app_server/controllers/games');

router.get('/gamedata',function(req,res){
    GameApiCtrl.getGamesList(req,res);
});
router.get('/gamedataordered',function(req,res){
    GameApiCtrl.getGamesListOrderedPrice(req,res);
});

router.get('/gamedata/:gameid', function(req,res){
    GameApiCtrl.getSingleGame(req,res);
});

/* Enter new book to Database */
router.get('/addgame',function(req,res){
    GameAppCtrl.displayAdmin(req,res);
  });

router.post('/addgame', function(req,res,next) {
    GameApiCtrl.addGameToCollection(req,res);
    GameAppCtrl.displayAdmin(req,res);
    });

module.exports = router;