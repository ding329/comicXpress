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
//	carts: cartCollection.create(),
//	catalogs: catalogCollection,
	filteredCatalog: catalogCollection,
	//filteredCatalog: this.get(catalogs),
	filtered:false,

	watchchCom: function()
	{
			console.log("woo change");
	}.observes('chCom', 'chMag','chGraphic','chNovel','chGame','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),
	
	actions: 
	{
		placeOrder: function(input)
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
		filterCatalog: function()
		{
			var catalogs = this.get('catalogs');
	//		var filtered = this.get('filteredCatalog');
			if(this.get('chCom'))
			{
				this.set('filteredCatalog',
					catalogs.filter(function(catalog){
						return catalog.get('categoryCode')=='1';
					})
				);
			}
			else
			{
				console.log('should be false');
			}
/*			this.set('filteredCatalog', 
				catalogs.filter(function(catalog){
					return catalog.get(categoryCode)=='1';
				})
			);
*/			
		},

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