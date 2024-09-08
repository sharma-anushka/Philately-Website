const mongoose = require("mongoose");
const initData = require("./blogData.js");
const blogModel = require("../models/blogs.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/assam');
}

const initDB = async () => {
    await blogModel.deleteMany();
    initData.data = initData.data.map((obj) => ({ ...obj}))
    await blogModel.insertMany(initData.data);
    console.log("data was initialised")
};

initDB();


