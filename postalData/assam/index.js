const mongoose = require("mongoose");
const initData = require("../assam/assam.js");
const ancillaryModel = require("../../models/ancillary.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/assam');
}

const initDB = async () => {
    await ancillaryModel.deleteMany();
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66d0bbb64b6b71bb0d6e7c0c" }))
    await ancillaryModel.insertMany(initData.data);
    console.log("data was initialised")
};

initDB();


