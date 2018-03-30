'use strict';

const ctrl = require('../controllers/movies-ctrl');

module.exports = (app) => {
  app.route('/api/v1/movies')
    .get(ctrl.listMovies)
    .post(ctrl.createMovie);

  app.route('/api/v1/movies/:id')
    .get(ctrl.getMovie)
    .put(ctrl.updateMovie)
    .delete(ctrl.deleteMovie);
};
