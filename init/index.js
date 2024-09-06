const mongoose = require("mongoose");
const data = require("./data.js");
const Product = require("../models/products.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  }
  main().then(() => {
      console.log("connected to DB");
  }).catch((err) => {
      console.log(err);
  })

const initDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(data.data);
    console.log("data was initialized");
}

initDB();