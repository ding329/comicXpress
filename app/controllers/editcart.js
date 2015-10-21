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
			var orderForm ="Catalog Code\t Item Code\t Discount Code\t Quanity\t Item Description\t Price\t total\r\n";
			var orderController = this.get('orderController');
			var cart= orderController.get('cart');
			var title = orderController.get('selectName.name') + "_Order";
//forEach(monthlyItem, 0, reoccuring)
			cart.forEach(function(item) 
			{
				orderForm = orderForm + item.get('catalogId') +"\t " + item.get('itemId') + "\t " + item.get('discountCode') + "\t " + item.get('qty') + "\t" + item.get('name') +"\t "+ item.get('price') + '\t ' + item.get('total') + "\r\n";
			});
			var blob = new Blob([orderForm], {type: "text/plain;charset=utf-8"});
			saveAs(blob, title);
		},
	}

});
