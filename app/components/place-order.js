import Ember from 'ember';

/*
var cartCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});
*/
export default Ember.Component.extend({
//	catalog: null,
//	carts: cartCollection.create(),
	actions:
	{
		placeOrder: function()
		{
			var catalog= this.get('catalog');
			console.log(catalog.get('qty'));

			var carts=this.get('carts');
			var t= this;
			if(catalog.get('qty') > 0)
			{
				var tmp1=t.store.createRecord('cart',
				{
					price: catalog.get('price'),
					catalogId: catalog.get('catalogId'),
					itemId: catalog.get('itemId'),
					qty: catalog.get('qty'),
				});
				carts.pushObject(tmp1);
			}

		}

	}
});
