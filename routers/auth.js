const express = require("express");
const mongoose = require("mongoose");
const connectEnsureLogin = require('connect-ensure-login'); //authorization
const passport = require("passport");


const router = express.Router();

router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"],
	})
);

///Callback route for google to redirect
router.get("/google/redirect", passport.authenticate('google'),(req, res, next) => {
	user = req.user
	// res.send(user)
	res.sendFile(__dirname + '/secret-page.html');
});



// router.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	res.sendFile(__dirname + '/views/secret-page.html');
//   });

// router.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
// 	res.send(`Hello ${req.user.username}. Your session ID is ${req.sessionID} 
// 	 and your session expires in ${req.session.cookie.maxAge} 
// 	 milliseconds.<br><br>
// 	 <a href="/logout">Log Out</a><br><br>
// 	 <a href="/secret">Members Only</a>`);
//   });

module.exports = router;
