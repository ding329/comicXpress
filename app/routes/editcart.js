import Ember from 'ember';

export default Ember.Route.extend({

	model: function(){
		return this.store.all('cart');
	},

	setupController: function(controller, model)
	{
		controller.set('orderController', this.controllerFor('order'));
	},
});
