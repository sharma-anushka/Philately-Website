const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const badgeSchema = new Schema({
    name: String,
    image: String
});

const collectionItemSchema = new Schema({
    name: String,
    image: String
});

const blogPostSchema = new Schema({
    title: String,
    excerpt: String
});

const profileSchema = new Schema({
    name: { type: String, required: true },
    profilePicture: {
        filename: String,
        url: String
    },
    location: String,
    bio: String,
    badges: [badgeSchema],
    collections: {
        "Freedom Struggle": [collectionItemSchema],
        "Indian Art and Architecture": [collectionItemSchema],
        "Indian Railways": [collectionItemSchema],
        "Cultural Icons": [collectionItemSchema]
    },
    blogPosts: [blogPostSchema]
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
