// isloggedin? middleware
module.exports.isLoggedIn = (req, res, next) => {
  if(!req.isAuthenticated()){
    req.session.returnTo = req.originalUrl
    req.flash('error', "You must be logged in to do that.")
    return res.redirect("/yelpcamp/auth/login");
  }
  next();
}

