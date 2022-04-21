const mongoose = require("mongoose");

db = {
   db_url: "mongodb+srv://willy:pikachu@ameliorer.f8hfv.mongodb.net/test",
};

const ConnectToDb = async () => {
   console.log("connecting to db");
   await mongoose.connect(db.db_url, (err) => {
      if (err) {
         return console.log(err);
      } else {
         console.log("connected to db succesfully");
      }
   });
};

module.exports = { ConnectToDb };
