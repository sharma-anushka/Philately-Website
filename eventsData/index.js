const mongoose = require("mongoose");
const initData = require("./eventsData.js");
const eventModel = require("../models/events.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/assam');
}

const initDB = async () => {
    await eventModel.deleteMany();
    initData.data = initData.data.map((obj) => ({ ...obj}))
    await eventModel.insertMany(initData.data);
    console.log("data was initialised")
};

initDB();


