const renderLogin = function(req,res){
    res.render('login');
};

const renderLoggedIn = function(req,res,email)
{
    res.render('login',{userEmail: email});
    
}

const displayRegister = function(req,res){
    res.render('register');
};
module.exports = {
    renderLogin,
    renderLoggedIn,
    displayRegister
};