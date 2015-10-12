import Ember from 'ember';


var cartCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});


var catalogCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});

var chArry = [1,2,3,4,5,6,7,8,9,10,11,12,13];

export default Ember.Controller.extend({
	cart: cartCollection.create(),
//	catalogs: catalogCollection,
//	filteredCatalog: catalogCollection,
	//filteredCatalog: this.get(catalogs),
//determine if a checkbox has been clicked, call the filter function

/*	watchchCom: function()
	{
		console.log("woo change");
		this.send('filteredCatalog'); //might need to provide an input
;
	}.observes('chCom', 'chMag','chGraphic','chNovel','chGame','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),
*/	filteredCatalog: function()  //will need to fix later for multiple cases
	{
		console.log('inside filteredCatalog');
		var catalogs = this.get(catalogs);
		var filteredCatalogs = null;
	/*		if(this.get('chCom'))
		{
			console.log('in the if');
			filterdCatalogs=catalogs.filterby(catalog.get('categoryCode')

			var filter = '1';
			var rx= new RegExp(filter, 'gi');
			return catalogs.filter(function(catalog){
				return catalog.get('categoryCode').match(rx);
			});
			
		}
		else
		{
			console.log('failed to get in the if');
		}
*/
	}.observes('chCom', 'chMag','chGraphic','chNovel','chGame','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),
	//property('catalogs.@each'),  //does not like this, might not be needed due to

	filteredCatalogLoaded: function(){
		return this.get('filteredCatalog').length>0;
	}.property('filteredCatalog.length'),

	actions: 
	{
/*		placeOrder: function(input)
		{
			var carts = this.get('carts');
			var catalogs = this.get('catalogs');
			var t=this;
			console.log('Testing:');
			catalogs.forEach(function(item)
			{
				if(item.get('qty') >0)
				{
					var tmp= this.store.createRecord('cart',
					{
						price: item.get('price'),
						catalogId: item.get('catalogId'),
						itemId: item.get('itemId'),
						qty: item.get('qty'),
					});
					carts.pushObject(tmp);
				}
			});
		},
		*/
		addItem: function(item)
		{
	console.log('add item order.js')
			var cart= this.get('cart')
			var t= this;
			if(item.get('qty') >0)
			{
				var tmp= t.store.createRecord('cart',
				{
					price: item.get('price'),
					catalogId: item.get('catalogId'),
					itemId: item.get('itemId'),
					qty: item.get('qty'),
				});
				cart.pushObject(tmp);
			}
		}
	}
	
});
/*
filteredPhotos: function()
	{
		var filter = this.get('searchField');
		var rx = new RegExp(filter, 'gi');
		var photos = this.get('photos');

		return photos.filter(function(photo)
		{
			return photo.get('title').match(rx) || photo.get('owner.username').match(rx);
		});
	}.property('photos.@each', 'searchField'),
			}
*/			