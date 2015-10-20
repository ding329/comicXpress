import Ember from 'ember';

export default Ember.Controller.extend({
	monthlyorder: null,
//	cartController: null,
	actions:
	{
		removeItem: function(item)
		{
			var reoccuring=this.get('monthlyorder');
			reoccuring.removeObject(item);
			this.store.deleteRecord(item);
		},
		submitReoccuring: function()
		{
			/* this is where we put the code to pass the new reoccuring data to the datbase*/
		},
		/*  
		for each element in monthlyorders, check if they are in the catalog, if so grab the information and add them to cart
		*/
		submitToCart: function()
		{
/*			var orderController = this.get('orderController');
			var reoccuring=this.get('content');
			forEach(monthlyItem, 0, reoccuring)
			{
				var rx= new RegExp(monthlyItem, 'gi');
				var rval = orderController.get('catalog').filter(function(item) {
					return item.get('name').matches(rx);
				});
				if(rval)
				{
					console.log('found ::' + monthlyItem.name);
				}

			}
*/			
		},
	}
});
