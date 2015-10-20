import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var t=this;
		this.store.find('previewselection').then(function(record){
			t.set('preivewSelection', record);
		});
		return this.store.find('catalog');
	},
	setupController: function(controller, model)
	{
		controller.set('preivewSelection', this.get('preivewSelection'));
		controller.set('model', model);
		controller.set('monthlyController', this.controllerFor('monthlyorder'));
	},
});


