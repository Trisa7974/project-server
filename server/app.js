const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const User = require('./models/User.js');
const db = require ('./db/db.js')
db();

const logTimestamp = require('./middleware/logMiddleware');
const userRoute = require('./routes/userRoute');


app.use(express.json()); 
app.use(logTimestamp);   
app.use('/',userRoute);      


app.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});