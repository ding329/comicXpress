import Ember from 'ember';

import EmberValidations from 'ember-validations';

export default Ember.Controller.extend(EmberValidations,{
	validations:{
		"cart.qty":{
			numericality: {onlyInteger: true, greaterThanOrEqualTo:0, messages: {onlyInteger: 'Order must be an Integer'}}
		}
	},

	orderController: null,
	
	actions:
	{
		removeItem: function(item)
		{
		//	console.log('in the removeItem::' + item.get('name'));
			var orderController = this.get('orderController');
		//	console.log('in the removeItem::' + orderController.get('cart'));
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
				orderForm = orderForm + item.get('catalogid') +"\t " + item.get('itemid') + "\t " + item.get('discountcode') + "\t " + item.get('qty') + "\t" + item.get('name') +"\t "+ item.get('price') + '\t ' + item.get('total') + "\r\n";
			});
			var blob = new Blob([orderForm], {type: "text/plain;charset=utf-8"});
			saveAs(blob, title);
			this.send("emptyCart");
		},
		emptyCart: function()
		{
			var orderController = this.get('orderController');
			var cart= orderController.get('cart');
			var t=this;
/*
The forEach will only remove every other item because the next item takes the place of the deleted item and then is incremented past it.  if(item) prevents 
prevents us from going off the array and if cart.get() checks if the cart is empty, if not call the function again.  
*/
			cart.forEach(function(item)
			{
				if(item)
				{
					console.log('item::'+ item.get('name') );
					t.send('removeItem', item);
				}
	
			});
			if(cart.get('firstObject'))
			{
				t.send('emptyCart');
			}
		}
	}

});
