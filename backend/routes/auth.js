const router = require("express").Router();
const passport = require("passport")
const CLIENT_URL = "http://localhost:3000/"
 
// route to handle authentication sucess
router.get("/login/success", (req, res) => {
    if (req.user) {
        
        res.status(200).json({
            success:true,
            message: "successful",
            user: req.user,
            cookies: req.cookies
        })
    }
})
// route to handle authentication failure
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message:"Failed"
    })
})
// route to handle logout
router.get("/logout",(req, res)=> {
    req.logout();
    res.redirect(CLIENT_URL);
})

// getting request from client side
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect:"/login/failed"
    
}))
 
// getting request from client side
router.get("/github", passport.authenticate("github", { scope: ["profile"] }))
router.get("/github/callback", passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect:"/login/failed"
    
}))
 
module.exports =router