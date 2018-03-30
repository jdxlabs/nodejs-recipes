'use strict';

const ctrl = require('../controllers/movies-ctrl');

module.exports = (app) => {
  app.route('/movies')
    .get(ctrl.listMovies)
    .post(ctrl.createMovie);

  app.route('/movies/:id')
    .get(ctrl.getMovie)
    .put(ctrl.updateMovie)
    .delete(ctrl.deleteMovie);
};
