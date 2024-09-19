const mongoose = require("mongoose");
const Profile = require("../models/profile");
const profileData = require("./profileData");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/assam');
}

main().then(async () => {
    await Profile.deleteMany();  // Clear existing profiles
    await Profile.create(profileData);  // Insert the new profile data
    console.log("Profile data initialized successfully");
    mongoose.connection.close();
}).catch(err => console.log(err));
