import Ember from 'ember';

var catalogCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: false,
	content: [],
});

	

export default Ember.Controller.extend(
{
	catalogs: catalogCollection.create(),
	searchField: '',
	actions:
	{
		search: function()
		{
			console.log("2");
			this.get('catalogs').content.clear();
			this.store.unloadAll('catalog');  //empty catalog
			this.send('getCatalog', this.get('searchField'));
		},
		getCatalog: function(searchVar)
		{
			console.log("3");
			searchVar = "this will be used later";
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
			catalogs.pushObject(tmp1);
			catalogs.pushObject(tmp2);
			catalogs.pushObject(tmp3);
		}
	}
	
});
