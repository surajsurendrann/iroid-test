const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json({
      success: true,
      message: "Registraion successfull",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (password === user.password) {
        res
          .status(200)
          .json({ success: true, message: "login sucess", user: user });
      } else {
        res.status(400).json({ success: false, message: "wrong credentials" });
      }
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "login failed",
    });
  }
});

module.exports = router;
