import Ember from 'ember';

var catalogCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});
var cartCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});
	

export default Ember.Controller.extend(
{
	catalogs: catalogCollection.create(),
	carts: cartCollection.create(),
	searchField: '',
	actions:
	{
		search: function()
		{
			this.get('catalogs').content.clear();
			this.store.unloadAll('catalog');  //empty catalog
			this.send('getCatalog', this.get('searchField'));
		},
		getCatalog: function(searchVar)
		{
			searchVar = "this will be used later to search the DB";
			var catalogs = this.get('catalogs');
			var t= this;

			var tmp1 = t.store.createRecord('catalog',
			{
				name: "TRANSFORMERS MORE THAN MEETS EYE #47",
				price: "3.99",
				catalogId: "201509",
				itemId: "SEP150367",
				CatalogCode: "1",
				orderDate: "2015-11-02",
				sellDate: "2015-11-25",
				qty: 0,
			});
			var tmp2 = t.store.createRecord('catalog',
			{
				name: "BLACK SCIENCE PREMIERE HC BEGINNERS GUIDE TO ENTROPY",
				price: "49.99",
				catalogId: "201509",
				itemId: "SEP150588",
				CatalogCode: "3",
				orderDate: "2015-11-02",
				sellDate: "2015-11-25",
				qty: 0,
			});
			var tmp3 = t.store.createRecord('catalog',
			{
				name: "GAME OF THRONES STATUE ARYA STARK (DEC130145)",
				price: "225.00",
				catalogId: "201510",
				itemId: "OCT150132",
				CatalogCode: "10",
				orderDate: "2015-09-03",
				sellDate: "2015-11-11",
				qty: 0,
			});
			var tmp4 = t.store.createRecord('catalog',
			{
				name: "UNCANNY X-MEN #1",
				price: "3.99",
				catalogId: "201510",
				itemId: "OCT15076",
				CatalogCode: "1",
				orderDate: "2015-11-02",
				sellDate: "2015-12-02",
				qty: 0,
			});
			catalogs.pushObject(tmp1);
			catalogs.pushObject(tmp2);
			catalogs.pushObject(tmp3);
			catalogs.pushObject(tmp4);
		},
		placeOrder: function()
		{
			var catalogs = this.get('catalogs');
			var carts = this.get('carts');
			var t= this;

			catalogs.forEach(function(item)
			{
//			if(item.get('qty') >0 )
//			{
					var tmp= t.store.createRecord('cart',
					{
						name: item.get('name'),
						price: item.get('price'),
						catalogId: item.get('catalogId'),
						itemId: item.get('itemId'),
						qty: item.get('qty'),
//						item.get
					});
					carts.pushObject(tmp);
//:				}
			});
	

		}
	}
	
});
