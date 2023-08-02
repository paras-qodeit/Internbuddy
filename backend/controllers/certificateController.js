const CertificateModel = require("../models/certificateModel");

const certificate = async (req, res) => {
  try {
    const { name, coursename, email, transactionId } = req.body;
    const check = CertificateModel.findOne({ email });
    if (check) {
      return res
        .status(401)
        .json({ message: "Already applied for this course" });
    }
    const certificate = CertificateModel.create({
      name,
      email,
      coursename,
      transactionId,
    });
    res
      .status(200)
      .json({ coursename, message: "Successfully applied for Certificate" });
  } catch (error) {
    res.status(400).json("Internal Error");
  }
};

module.exports = { certificate };
