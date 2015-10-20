import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('monthlyorder');
	},
	setupController: function(controller, model)
	{
		controller.set('monthlyorder', model);
	},

});
