const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

// Register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all the fields" });
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Hash the password BEFORE creating the user
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    
  });

  if (user) {
    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Failed to create user" });
  }
});

// Login user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;



  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid password" });
  }
});
module.exports={registerUser,loginUser}