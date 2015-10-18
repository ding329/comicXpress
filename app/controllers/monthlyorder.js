import Ember from 'ember';

export default Ember.Controller.extend({
	actions:
	{
		removeItem: function(item)
		{
			var monthlyorder=this.get('monthlyorder');
			this.get('monthlyorder').removeObject(item);
			this.store.deleteRecord(item);
		}
	}
});
