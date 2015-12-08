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
		//	this.store.deleteRecord(item);
			item.deleteRecord();
			item.save();
//			item.delete();
		},
	
		

	}
});
