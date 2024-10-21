const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoginModel = mongoose.Schema(
  {
    Email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Login", LoginModel);
