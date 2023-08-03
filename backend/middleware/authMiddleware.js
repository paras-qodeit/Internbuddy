const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
  let token;
  token = req.cookies["JwtToken"];
  console.log(token);
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log(decoded);
      req.user = await User.findById(decoded._id).select("-password");
      next();
    } catch (error) {
      res.status(401);
    }
  } else {
    res.status(401).json({ error: "Not Authorised!" });
  }
};

module.exports = authMiddleware;
