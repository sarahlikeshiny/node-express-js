const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Donut = require('../models/donut');


Donut.collection.drop();


Donut
  .create([{
    style: 'ring',
    flavor: 'sprinkles'
  },{
    style: 'filled',
    flavor: 'jam'
  }])
  .then((users) => {
    console.log(`${users.length} donuts created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
