const mongoose = require("mongoose");

function connect() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blog_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connect succsessfully!"))
    .catch((err) => console.log("Connect failure!"));
}

module.exports = { connect };
