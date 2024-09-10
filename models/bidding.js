const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const biddingSchema = new Schema({
    productName: String,
    productType : String,
    verified: Boolean,
    numberOfBids: Number,
    timePosted: String,
    averageBid: {
        type: String,
        required: true,
    },
    url: String,
});

const Bidding = mongoose.model("Bidding", biddingSchema);
module.exports = Bidding;