const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log('db connected successfully');
  } catch (err) {
    console.log("db err: ", err);
    console.log(process.env.MONGO_URI);
  }
};

module.exports = connectDB;
