'use strict';

const mongoose = require('mongoose');

const Movie = mongoose.model('movies');

exports.listMovies = (req, res) => {
  Movie.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.createMovie = (req, res) => {
  const movie = new Movie(req.body);
  movie.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.readMovie = (req, res) => {
  Movie.findById(req.params.id, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.updateMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.deleteMovie = function (req, res) {
  Movie.remove({
    _id: req.params.id
  }, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Movie successfully deleted' });
  });
};
