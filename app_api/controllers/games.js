const mongoose = require('mongoose');
const Game = mongoose.model('Game');

const GameAppCtrl = require('../../app_server/controllers/games');

const getGamesList = function(req,res){
    Game.find({},function(err,result){
        if(err) {
            console.log(err);
        }else{
            res.json(result);
        }
    });
};

const getGamesListOrderedPrice  = function(req,res){
    Game.find({}).sort('price').exec(function(err,result){
        if(err) {
            console.log(err);
        }else{
            res.json(result);
        }
    });
};

const getSingleGame = function(req,res){
    Game
        .findById(req.params.gameid)
        .exec((err,Game) => {
            if(!Game){
                res
                    .status(404)
                    .json({
                        "message": "gameid not found"
                    });
                    return;
            } else if (err) {
                res	
                  .status(404) 
                  .json(err); 
                return; 	
              }
              res		
                .status(200)
                .json(Game);
        });
};

const addGameToCollection = function(req,res) { 

    if(req.body.name != '' && req.body.ageRating != '' && req.body.availability != '' && req.body.rating != null && req.body.price != '' && req.body.url != '')
    {
    var newGame = Game({
        name: req.body.name,
        ageRating: req.body.ageRating,
        rating: req.body.rating,
        availability: req.body.availability,
        price: req.body.price,
      });
      console.log(newGame);
      newGame.save(function(err){
        if(err) throw err;
    
        console.log('Game added');
      })
    }
    else{
        console.log("invalid entry");
    }
};

const orderGames = function(req,res){
    if(req.body.checked = "on"){
        getGamesListOrderedPrice(req,res);
    }
}


module.exports = {
    getGamesList,
    getSingleGame,
    addGameToCollection,
    getGamesListOrderedPrice,
    orderGames
};