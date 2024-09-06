const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Product = require("./models/products");
const ejsMate = require("ejs-mate");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
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

app.get("/", (req, res) => {
    res.render
})

app.get("/products", async (req,res) => {
    const allProducts = await Product.find({});
    res.render("products/index.ejs", {allProducts});
})

app.get("/products/:id", async (req,res) => {
    let { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show.ejs", {product});
})
app.listen(8080, () =>{
    console.log("server listening");
})