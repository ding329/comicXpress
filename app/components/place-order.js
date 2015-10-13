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
	isComic: function()
	{
		var catalog = this.get('catalog');
		return catalog.get('categoryCode')=='1';
	},
	actions:
	{
		addItem: function()
		{
			var catalog= this.get('catalog');
			console.log('add item component');
			this.sendAction("addItem", catalog);
			return true;
	/*		console.log(catalog.get('qty'));
		//	console.log(carts);
		//	var carts=this.get('carts');
			var t= this;
			console.log(t.store);
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
*/
		}

	}
});
