const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv').config();
require('./models/Post');
require('./routes/postRoutes')(app);

app.listen(process.env.PORT, () => console.log('listening on port: ' + process.env.PORT));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
 .then(() => console.log('Connected to mongoose'));