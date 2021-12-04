const mongoose = require('mongoose');
const db = require('../models/db');
const User = mongoose.model('User');

const userCtrl = require('../../app_server/controllers/users');


const validateLogin = function(req,res) { 
    if(req.body.email != '' && req.body.password != '')
    {
        console.log(req.body.email);
        console.log(req.body.password);
        User.countDocuments({email : req.body.email,password : req.body.password},function (err, count){ 
            if(count>0){
                console.log("Correct Details. Logging in...");
                userCtrl.renderLoggedIn(req,res,req.body.email);
            }
            else{
                console.log("Incorrect details. Please try again.");
                userCtrl.renderLogin(req,res);
            }     
            });
    };
}

module.exports = {
    validateLogin
};