const renderLogin = function(req,res){
    res.render('login');
};

const renderLoggedIn = function(req,res,email)
{
    res.render('login',{userEmail: email});
    
}

module.exports = {
    renderLogin,
    renderLoggedIn
};