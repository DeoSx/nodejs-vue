const express = require('express');
const mongoose = require('mongoose');
const app = require('./app.js');

const PORT = process.env.PORT || 3000;

async function start() {
  await mongoose.connect(
    'mongodb+srv://damir:1q2w3e4r@cluster0-laynp.mongodb.net/texts',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  );
  console.log('MongoDB connected...');
  app.listen(PORT, () => {
    console.log('Server is running');
  });
}

start();

