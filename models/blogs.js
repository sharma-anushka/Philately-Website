const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    username : String,
    postingTime : String,
    title: String,
    blog: String,
    comments: Number,
    like : Boolean,
    bookmark : Boolean,
    image: {
        url1: {
            type: String,
        },
        url2: {
            type: String,
        },
    }
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;