import Ember from 'ember';

export default Ember.Controller.extend({
	orderController: null,
	
	actions:
	{
		removeItem: function(item)
		{
			var orderController = this.get('orderController');
			orderController.get('cart').removeObject(item);
			this.store.deleteRecord(item);
		}
	}

});
