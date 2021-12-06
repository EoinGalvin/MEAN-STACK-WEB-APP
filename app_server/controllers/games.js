const request = require('request');
const apiOptions = { 
    server : 'http://localhost:3000' 
    };
    if (process.env.NODE_ENV === 'production') { 
        apiOptions.server = 'https://glorifythegame.herokuapp.com'; //need to put heroku link here
        };

        const renderGamesPage = function(req,res,responseBody){
            res.render('games-list',{games: responseBody});
        };

        const getGamesList = function(req,res,bool){
            if(bool == true)
            {
                var path = '/api/gamedataordered';
            }
            else{
                var path ='/api/gamedata';
            }
                
            
            const requestOptions = {
                url : apiOptions.server + path,
                method : 'GET',
                json : {},
                qs : {}
            };
            request(
                requestOptions,function(err,response,body){
                    renderGamesPage(req,res,body);
                }
            );
        };

        const renderSingleGamePage = function(req,res,responseBody){ 
            res.render('game-page',{gamedata: responseBody});
        };

        const gamedata = function(req,res){
            const path = '/api/gamedata/' + req.params.gameid;
            const requestOptions = { 
                url : apiOptions.server + path, 
                method : 'GET', 
                json : {},
                qs : {}
                };
                request(
                    requestOptions,function(err,response,body){
                        renderSingleGamePage(req,res,body);
                    }
                );
        };

        const displayAdmin = function(req,res){
            res.render('admin-AddGame');
        };

          
        
        module.exports = {
            renderGamesPage,
            getGamesList,
            renderSingleGamePage,
            gamedata,
            displayAdmin
        };
