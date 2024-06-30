const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const bookRoutes = require('./routes/books');
const reviewRoutes = require('./routes/review');
const userRoutes = require('./routes/users');

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000', // allow your frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/users', userRoutes);


app.use('/books', bookRoutes);
app.use('/reviews', reviewRoutes);

const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
