const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/user/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}!`);
});


router.post('/user', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new User({ name, email, age });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
