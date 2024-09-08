const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Product = require("./models/ancillary");
const ejsMate = require("ejs-mate");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const session = require("express-session");
const flash = require("connect-flash");
const { savedRedirectUrl } = require("./middleware");
const Bidding = require("./models/bidding");
const Blog = require("./models/blogs");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/assam');
}
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: true,
    cookies: {
        expires: Date.now() + 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.get("/", (req, res) => {
    res.render("products/home.ejs");
})

//assam
app.get("/products/assam", async (req, res) => {
    const assamProducts = await Product.find();
    console.log(assamProducts)
    res.render("products/assam/assam.ejs", {assamProducts});
})

app.get("/products/assam/:id", async (req,res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/assam/show.ejs", {product});
})

//community
app.get("/community/main", async (req,res) => {
    const blogs = await Blog.find();
    res.render("community/main.ejs",{blogs});
})

app.get("/community/profile", (req,res) => {
    res.render("community/profile.ejs");
})
//signup
app.get("/signup",(req, res) => {
    res.render("users/signup.ejs");
})

app.post("/signup", async (req, res) => {
    let {username, email, password} = req.body;
    const newUser = new User({email, username});
    const registeredUser = await User.register(newUser, password);
    req.flash("success", "Welcome to ePost Office !")
    res.redirect("/");

})


//login
app.get("/login", (req,res, next) => {
    res.render("users/login.ejs");
})

app.post("/login",savedRedirectUrl,passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
}),  (req,res) => {
    req.flash("success", "Welcome back to ePost Office!");
    let redirectUrl = res.locals.redirectUrl || "/";
    res.redirect(redirectUrl);
})

//account- personalInfo
app.get("/account/personalInfo", (req, res) => {
    res.render("account/personalInfo.ejs");
})

//account-PhilatelicDepoacc
app.get("/account/philatelicDeposit", (req,res) => {
    res.render("account/pDepoAcc.ejs");
})

//bidding-events-quizzes
app.get("/features/bidding", async (req,res) => {
    const bidding = await Bidding.find();
    console.log(bidding);
    res.render("features/bidding.ejs", {bidding});
})

app.get("/features/events", (req,res) => {
    res.render("features/events.ejs");
})

app.get("/features/quiz", (req,res) => {
    res.render("features/quiz.ejs");
})

//map
app.get("/map", (req,res) => {
    res.render("map.ejs");
})



app.listen(8080, () =>{
    console.log("server listening");
})