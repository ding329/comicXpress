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
		},
		generateOrderForm: function()
		{
			var orderController = this.get('orderController');
			var blob = new Blob([orderController.get('cart')], {type: "text/plain;charset=utf-8"});
			saveAs(blob, "hello world.txt");
		},
	}

});
