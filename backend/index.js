const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const passportSetup =require("./passport")
const app = express();
const authRoute =require("./routes/auth")

// session cookies
app.use(cookieSession(
    {
        name: "session",
        keys: ["jowie"],
        maxAge: 24*60*60*100
    }
))
// initalize passport library
app.use(passport.initialize());
app.use(passport.session());
// cors configuration
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

app.use("/auth", authRoute);
app.listen(5000, () => {
    console.log("App is listening on port 5000");
})