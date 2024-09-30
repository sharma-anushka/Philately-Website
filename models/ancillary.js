const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("../models/reviewProduct");

const ancillarySchema = new Schema({
    title : String,
    product_code : String,
    sold_by: String,
    prepared_by: String,
    price : {
        type: String,
        required: true,
    },
    description : String,
    image: {
        filename: {
            type: String,
        },
        url: {
            type: String,
            default: "https://i.ibb.co/2KCdJKw/IMAGE-NOT-FOUND.jpg", 
            set: (v) => v === "" ? "https://i.ibb.co/2KCdJKw/IMAGE-NOT-FOUND.jpg" : v
        },
    },
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ]
});

const Product = mongoose.model("Product", ancillarySchema);
module.exports = Product;