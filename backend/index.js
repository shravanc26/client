const http = require('http');
const express = require('express')
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const { query } = require('express');

// Connection URI
const url = "mongodb+srv://shravan:ravilata@cluster0.yyer7.mongodb.net/project1?retryWrites=true&w=majority";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connected');
});

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
