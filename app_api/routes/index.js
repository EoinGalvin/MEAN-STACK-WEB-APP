var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const GameApiCtrl = require('../controllers/games');
const GameAppCtrl = require('../../app_server/controllers/games');
const UserApiCtrl = require('../../app_api/controllers/users');
const UserAppCtrl = require('../../app_server/controllers/users');
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

/* gets the /api/addgame page and displays it */
router.get('/addgame',function(req,res){
    GameAppCtrl.displayAdmin(req,res);
  });
/* Enter new Game to Database */
router.post('/addgame', function(req,res) {
    GameApiCtrl.addGameToCollection(req,res);
    GameAppCtrl.displayAdmin(req,res);
    });

router.post('/register',function(req,res){
    UserApiCtrl.addUserToCollection(req,res);
    UserAppCtrl.displayRegister(req,res);

});

module.exports = router;