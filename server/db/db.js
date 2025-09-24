const mongoose = require("mongoose");

const MongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://trisa:N9sESIh2K3r0v6dc@cluster0.bbdiuqr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to database");
  } catch (error) {
    console.error("Error in database:", error);
    process.exit(1);
  }
};

module.exports = MongoDB;
