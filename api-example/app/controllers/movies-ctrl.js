'use strict';

const mongoose = require('mongoose');

const Movies = mongoose.model('Movies');

exports.listMovies = (req, res) => {
  Movies.find({}, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.createMovie = (req, res) => {
  const movie = new Movies(req.body);
  movie.save((err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.getMovie = (req, res) => {
  Movies.findById(req.params.id, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.updateMovie = (req, res) => {
  Movies.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, task) => {
    if (err) {
      res.send(err);
    }
    res.json(task);
  });
};

exports.deleteMovie = function (req, res) {
  Movies.remove({
    _id: req.params.id
  }, (err, movie) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Movie successfully deleted' });
  });
};
