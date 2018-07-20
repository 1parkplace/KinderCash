var exports = module.exports = {}


exports.signup = function(req,res){

	res.render('signup'); 

}

exports.identify = function(req,res){

  res.render('identify');

}

exports.signupERROR = function(req,res){

	res.render('signupERROR'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}
exports.chat = function(req,res){
  res.render('chat');
}

exports.signinERROR = function(req,res){

	res.render('signinERROR'); 

}

exports.views_account_summary = function(req,res){
  RES.RENDER('views_account_summary');
  
}

exports.dashboard = function(req,res){
  //res.send('<script>window.location.href="https://afternoon-tundra-66682.herokuapp.com/";</script>');
	res.render('dashboard'); 

}

exports.news= function(req,res){
  res.send('<script>window.location.href="https://tinyurl.com/KinderCash";</script>');
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {

  res.render('signout'); 
  });

}
