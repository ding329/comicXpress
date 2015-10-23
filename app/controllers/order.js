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
	chCard:false,
	chComNoveties:false,
	chNoveties:false,
	chApparel:false,
	chToy:false,
	chScard:false,
	chScomic:false,
	chRetail:false,
	chDiamond:false,
	chPoster:false,
	chVideo:false,
	errorMesg:'',
	filteredCatalog: function()  //will need to fix later for multiple cases
	{
		this.set('errorMesg', "");
		var regexSearch = this.get('SearchField');
// console.log('Search is::' + regexSearch);
		var regexstr= (this.get('chCom')? '^1$|':"")+(this.get('chMag')? '^2|':"")+(this.get('chGraphic')? '^3|':"")+(this.get('chNovel')? '^4|':"")+(this.get('chGame')? '^5|':"")+(this.get('chCard')? '^6|':"")+(this.get('chComNoveties')? '^7|':"")+(this.get('chNoveties')? '^8|':"")+(this.get('chApparel')? '^9|':"")+(this.get('chToy')? '10|':"")+(this.get('chScard')? '11|':"")+(this.get('chScomic')? '12|':"")+(this.get('chRetail')? '13|':"")+(this.get('chDiamond')? '14|':"")+(this.get('chPoster')? '15|':"")+(this.get('chVideo')? '16|':"");
		regexstr= regexstr.substring(0, regexstr.length-1);
		var rx= new RegExp(regexstr, 'gi');

		var rx2 = new RegExp(regexSearch, 'gi');

		var entries = this.get('content').sortBy('itemId'); 

			return entries.filter(function(entry) {
				return entry.get('categoryCode').match(rx) && entry.get('name').match(rx2);
			});
	}.property('SearchField', 'content', 'chCom', 'chMag','chGraphic','chNovel','chGame', 'chCard','chComNoveties','chNoveties','chApparel','chToy', 'chScard', 'chScomic', 'chRetail', 'chDiamond', 'chPoster', 'chVideo'),

/*	filteredCatalogLoaded: function(){
		console.log('inside filteredCatalogLoaded');
		console.log('the length is::' + this.get('filteredCatalog.length'));

		return this.get('filteredCatalog').length >0;
	}.property('filteredCatalog.length'),
*/
	actions:
	{
		addItem: function(item)
		{
			this.set('errorMesg', "");
			console.log('add item order.js');
			var cart= this.get('cart');
			var t= this;

			var rx= new RegExp('^' +item.get('name')+'$', 'gi');
			var rval= cart.filter(function(entry)
			{
				return entry.get('name').match(rx);
			});

	//		console.log('Cart rx is::' + rx + "::rval is::" + rval);
			if(item.get('qty') >0)
			{
//				console.log('In the if');
				if(rval==0)
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
					});
					cart.pushObject(tmp);
				}
				if(item.get('reoccuring'))
				{
					var monthlyController = t.get('monthlyController');
					var monthlyOrder = monthlyController.get('monthlyorder');

					var ptr = item.get('name').search("#");  //will need the position of the # for the substring
					var newId = item.get('itemId').substring(3,11); // have to have a unique id, get last one, which should be largest
//console.log('newId is::' + newId);
					rx = new RegExp(item.get('name').substring(0, ptr+1), 'gi');
					var bol=0;

					if(monthlyOrder)  //if monthly order has not been visted this will cause an issue
					{
						var bol = monthlyOrder.filter(function(entry){
							return entry.get('name').match(rx);
						});
					}
					else
					{
						t.set('errorMesg', "Note::Either have not received reoccuring orders from server or none exist.  Duplicate Monthly orders may occur when visting /monthlyorder");
					}
					if(bol==0)  //check if it is already in monthlyorder
					{
						var tmp2 = t.store.createRecord('monthlyorder',
						{
							id: newId,
							name: item.get('name').substring(0, ptr+1),
							qty: item.get('qty'),
						});
					}
				}

			}
		},
		addMonthlyOrder:function()
		{
			this.set('errorMesg', "");
			var monthlyController = this.get('monthlyController');
			var monthlyorder = monthlyController.get('monthlyorder');
			var catalog = this.get('content');
			var t =this;
			if(!monthlyorder)
			{
				t.set('errorMesg', "Note: App did not receive reoccuring order from server and did not update the cart.  Visiting /monthlyorder may help");
			}
			else
			{
				monthlyorder.forEach(function(item)
				{
					var rx = RegExp(item.get('name')+'\\d+$', 'gi');
					console.log('rx is::' + rx);
					var entry= catalog.filter(function(catalogItem)
					{
						return catalogItem.get('name').match(rx);
					});
					if(entry != 0)
					{	t.set('errorMesg', "");
		//				console.log('In the addMonthlyOrder if::'+ entry.get('name') + "::" + entry.get('qty'));
						entry.forEach(function(merch)
						{
							merch.set('qty', item.get('qty'));
							t.send('addItem', merch);
						});
					}
				});
			}
		},
		
		getPreviewSelection: function()
		{
			var previewSel = this.get('selectName');
			/*
				insert code to fetech the catalog based off the preview selection
			*/
			console.log('The preview catalog is::' + previewSel.name);
		}.property('selectName'),

	}
});
