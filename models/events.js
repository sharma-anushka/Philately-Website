const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventName : String,
    eventDate : String,
    location: String,
    description: String,
    eventImage: String,
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;