var authController = require('../controllers/authcontroller.js');

// FC- This section connects the Models so we can use sequelize and the ORM---------
var db= require("../models/")
var orm= require("../config/orm.js")
//----------------------------------------------------------------------------------

module.exports = function(app,passport){

app.get('/', authController.identify);

app.get('/signup', authController.signup);

app.get('/signupERROR', authController.signup);

app.get('/signin', authController.signin);

app.get('/signinERROR', authController.signin);

app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard', failureRedirect: '/signupERROR'}));

app.get('/dashboard',isLoggedIn, authController.dashboard);

app.get('/signout',authController.logout);

app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard', failureRedirect: '/signinERROR'}));

//FC- Route to make transactions------------------------------------------------
app.get("/transactions/:user_id", function(req, res) {

var user_id= req.params.user_id
// Same resutl using ORM
//result= orm.selectTransactionPage(function(result){
//  res.render("account_trx", { Accounts:result });
//})
db.accounts.findAll({where: {user_id:user_id}}).then(function(result){
res.render("account_trx", { Accounts:result });  
})
})




app.post("/deposit", function(req, res) {

    db.transactions.create(req.body).then(function(result){
        console.log("transacion succesfull")
        console.log(req.body)        
    // Section to update balance accounts table
var account_json={
    account_balance:req.body.end_bal,
    account_id:req.body.account_id,
    user_id:req.body.user_id
    }

    db.accounts.update(
        account_json,
        {returning: true, where: {account_id: account_json.account_id}}
      ).then(function(result) {      
    
        res.json({response:200})
    })
  
    
    })
})


app.post("/withdrawal", function(req, res) {

    db.transactions.create(req.body).then(function(result){
        console.log("transacion succesfull")
        console.log(req.body)        
    // Section to update balance accounts table
var account_json={
    account_balance:req.body.end_bal,
    account_id:req.body.account_id,
    user_id:req.body.user_id
    }

    db.accounts.update(
        account_json,
        {returning: true, where: {account_id: account_json.account_id}}
      ).then(function(result) {      
    
        res.json({response:200})
    })
  
    
    })
})


















//----------------------------------------------------------------------------------  

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signinERROR');
}


}