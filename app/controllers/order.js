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
	monthlyController: null,
	SearchField: "",
	selectName: "",
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

	filteredCatalog: function()  //will need to fix later for multiple cases
	{
		var regexSearch = this.get('SearchField');
console.log('Search is::' + regexSearch);
		var regexstr= (this.get('chCom')? '^1$|':"")+(this.get('chMag')? '^2|':"")+(this.get('chGraphic')? '^3|':"")+(this.get('chNovel')? '^4|':"")+(this.get('chGame')? '5|':"")+(this.get('chNoveties')? '6|':"")+(this.get('chApparel')? '7|':"")+(this.get('chToy')? '8|':"")+(this.get('chScard')? '9|':"")+(this.get('chScomic')? '10|':"")+(this.get('chRetail')? '11|':"")+(this.get('chDiamond')? '12|':"")+(this.get('chPoster')? '13|':"")+(this.get('chVideo')? '14|':"");
		regexstr= regexstr.substring(0, regexstr.length-1);
		var rx= new RegExp(regexstr, 'gi');

		var rx2 = new RegExp(regexSearch, 'gi');

		var entries = this.get('content'); //('catalogs');
	//	console.log('Entries is:' + entries + " " + rx);

			return entries.filter(function(entry) {
	//			console.log(entry.get('categoryCode')+' : ' + entry.get('categoryCode').match(rx));
				return entry.get('categoryCode').match(rx) && entry.get('name').match(rx2);
			});
		//console.log('filteredCatalog is' + filteredCatalog);
	}.property('SearchField', 'content', 'chCom', 'chMag','chGraphic','chNovel','chGame','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),
	//property('catalogs.@each'),  //does not like this, might not be needed due to

	filteredCatalogLoaded: function(){
		console.log('inside filteredCatalogLoaded');
		console.log('the length is::' + this.get('filteredCatalog.length'));

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
		//			total: item.get('qty') * item.get('price'),
				});
				cart.pushObject(tmp);

			}
		},
		getPreviewSelection: function()
		{
			var previewSel = this.get('selectName');
			/*
				insert code to fetech the catalog based off the preview selection
			*/
			content.log('The preview catalog is::' + previewSel);
		}.property('selectName'),

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