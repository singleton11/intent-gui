import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('projects', function () {
    this.route('new');
    this.route('project', {path: '/:id'}, function () {
      this.route('show', {path: ''});
      this.route('edit');
    });
  });
  this.route('login');
});

export default Router;
