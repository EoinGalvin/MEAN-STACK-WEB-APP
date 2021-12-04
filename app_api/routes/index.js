var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const GameApiCtrl = require('../controllers/games');
const GameAppCtrl = require('../../app_server/controllers/games');

/* Gets All game data from the database */
router.get('/gamedata',function(req,res){
    GameApiCtrl.getGamesList(req,res);
});
/* Gets all game data from the databased in order of price*/
router.get('/gamedataordered',function(req,res){
    GameApiCtrl.getGamesListOrderedPrice(req,res);
});
/* Gets a specific gameid to display on /games/gameid page*/
router.get('/gamedata/:gameid', function(req,res){
    GameApiCtrl.getSingleGame(req,res);
});

/* Enter new Game to Database */
router.get('/addgame',function(req,res){
    GameAppCtrl.displayAdmin(req,res);
  });
/* */
router.post('/addgame', function(req,res) {
    GameApiCtrl.addGameToCollection(req,res);
    GameAppCtrl.displayAdmin(req,res);
    });

module.exports = router;