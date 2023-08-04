const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create the new user
    const user = new User({
      name,
      email,
      password,
    });

    // Generate a JWT
    const token = generateToken(res, email);
    // Save the user tSo the database
    await user.save();

    // Return the email and access token
    res.status(201).json({ email, name, accessToken: token });
  } catch (error) {
    console.log("Error during signup:", error);
    res.status(500).json({ message: "Signup failed", error: error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = generateToken(res, email);
    const name = user.name;
    // console.log(token);
    // Return the email and access token
    res.status(200).json({ email, name, accessToken: token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Login failed" });
  }
};

const LogoutUser = async (req, res) => {
  res.cookie("jwtToken", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "User logged out",
  });
};

module.exports = { signup, login, LogoutUser };
