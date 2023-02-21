import mongoose from "mongoose";
const dotenv = require("dotenv");
dotenv.config();

const dbString = process.env.MONGO_DB_CONNECTION;
mongoose
  .connect(`${dbString}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    // console.log(error);
    console.log(dbString);
  });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});
module.exports = db;
