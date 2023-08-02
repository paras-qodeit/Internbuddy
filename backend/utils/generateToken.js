const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (res, email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("jwtToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: "https://qodeit-internbuddy.netlify.app/",
    // maxAge: 3 * 24 * 60 * 60 * 1000,
  });
};
module.exports = generateToken;
