'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  title: {
    type: String,
    required: 'Kindly enter the title of the movie'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  affect: {
    type: [{
      type: String,
      enum: ['positive', 'neutral', 'negative']
    }],
    default: ['neutral']
  }
});

module.exports = mongoose.model('Movies', schema);
