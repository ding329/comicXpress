import Ember from 'ember';

export default Ember.Controller.extend({
	monthlyorder: null,
//	cartController: null,
	actions:
	{
		removeItem: function(item)
		{
//			var reoccuring=this.get('monthlyorder');
			this.get('monthlyorder').removeObject(item);
			this.store.deleteRecord(item);
		},
		submitReoccuring: function()
		{
			/* this is where we put the code to pass the new reoccuring data to the datbase*/
		},

	}
});
