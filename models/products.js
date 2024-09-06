const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    date : String,
    name : String,
    denomination : {
        type: String,
        required: true,
    },
    theme : String,
    image: {
        filename: {
            type: String,
        },
        url: {
            type: String,
            default: "https://i.ibb.co/2KCdJKw/IMAGE-NOT-FOUND.jpg", 
            set: (v) => v === "" ? "https://i.ibb.co/2KCdJKw/IMAGE-NOT-FOUND.jpg" : v
        },
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;