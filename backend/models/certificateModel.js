const mongoose = require("mongoose");
const { isEmail } = require("validator");

const certificateModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "invalid Email"],
    },
    coursename: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const CertificateModel = mongoose.model("certificate", certificateModel);
module.exports = CertificateModel;
