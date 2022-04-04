const mongoose = require("mongoose");

// configuration setup to connect with the database

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
