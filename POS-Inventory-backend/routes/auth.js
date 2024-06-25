
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usersModels');

// Register route
router.post('/register', async (req, res) => {

  const { username, password,fullname,email,created_at,updated_at } = req.body;
console.log(req.body);
  try {
    // Check if user already exists
    let user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({ username, password,fullname,email,created_at,updated_at});

    // use Hash password encryption
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user
    await user.save();

    res.json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
console.log(req.body);
  try {
    // Check if user exists
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and return JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };
const jwtSecret = 'mySecretKey123';
    jwt.sign(
      payload, jwtSecret, { expiresIn: 36000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
        console.log(token);
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
