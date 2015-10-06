import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('order');
  this.route('editCart');
  this.route('auth');
});

export default Router;
