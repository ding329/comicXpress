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

export default Ember.Controller.extend({
	cart: cartCollection.create(),
	chCom:false,
	chMag:false,
	chGraphic:false,
	chNovel:false,
	chGame:false,
	chNoveties:false,
	chApparel:false,
	chToy:false,
	chScard:false,
	chScomic:false,
	chRetail:false,
	chDiamond:false,
	chPoster:false,
	chVideo:false,
//	catalogs: catalogCollection,
//	filteredCatalog: catalogCollection,


	filteredCatalog: function()  //will need to fix later for multiple cases
	{

		console.log('inside filteredCatalog');
//		this.get('filteredCatalog').content.clear();
//		this.store.unload('filteredCatalog');


		var regexstr= (this.get('chCom')? '1|':"")+(this.get('chMag')? '2|':"")+(this.get('chGraphic')? '3|':"")+(this.get('chNovel')? '4|':"")+(this.get('chGame')? '5|':"")+(this.get('chNoveties')? '6|':"")+(this.get('chApparel')? '7|':"")+(this.get('chToy')? '8|':"")+(this.get('chScard')? '9|':"")+(this.get('chScomic')? '10|':"")+(this.get('chRetail')? '11|':"")+(this.get('chDiamond')? '12|':"")+(this.get('chPoster')? '13|':"")+(this.get('chVideo')? '14':"");
		var rx= new RegExp(regexstr, 'gi');

		var entries = this.get('content'); //('catalogs');
		console.log('Entries is:' + entries + " " + rx);
	//	this.set('filteredCatalog'),
			return entries.filter(function(entry) {
				return entry.get('categoryCode').match(rx);
			});
	//	console.log('filteredCatalog is' + filteredCatalog);
	}.observes('chCom', 'chMag','chGraphic','chNovel','chGame','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),
	//property('catalogs.@each'),  //does not like this, might not be needed due to

	filteredCatalogLoaded: function(){
		console.log('inside filteredCatalogLoaded');
		var t=this;
		if(t.get('chCom'))
		{
			console.log('the length is::' + filteredCatalog.length);
		}
		return this.get('filteredCatalog').length >0;
	}.property('filteredCatalog.length'),

	actions: 
	{

		addItem: function(item)
		{
			console.log('add item order.js');
			var cart= this.get('cart');
			var t= this;
			if(item.get('qty') >0)
			{
				var tmp= t.store.createRecord('cart',
				{
					id: item.get('id'),
					name: item.get('name'),
					price: item.get('price'),
					catalogId: item.get('catalogId'),
					itemId: item.get('itemId'),
					discountCode: item.get('discountCode'),
					qty: item.get('qty'),
					total: item.get('qty') * item.get('price'),
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