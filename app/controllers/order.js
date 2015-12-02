import Ember from 'ember';

var cartCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});

/*
var catalogCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
	sortProperties: ['itemId'],
	sortAscending: true,
	content: [],
});
*/
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

		var entries = this.get('content').sortBy('itemid'); 
//		console.log("entries is::" + entries);
			return entries.filter(function(entry) {
				return entry.get('categorycode').match(rx) && entry.get('name').match(rx2);
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
	//		console.log('add item order.js');
			var cart= this.get('cart');
			var t= this;
/*
We do not want duplicates in the cart.  We use the regexp to see if the name is in the cart.  The ^$ prevents X-Men from having 10 hits (exact title)
*/
			console.log('itemid::'+ item.get('itemid') )
			var rx= new RegExp('^' +item.get('itemid')+'$', 'gi');
	//		var rx= new RegExp(item.get('id'), 'gi');
			var rval= cart.filter(function(entry)  //fi
			{
				return entry.get('itemid').match(rx);
			});

	//		console.log('Cart rx is::' + rx + "::rval is::" + rval);
			if(item.get('qty') >0)
			{
		//	console.log('In the if');
				if(rval==0) //did not find in cart, put into cart
				{
						console.log('tmp name::'+ item.get('name'));
					var tmp= t.store.createRecord('cart',
					{
						id: item.get('id'),
						name: item.get('name'),
						price: item.get('price'),
						catalogid: item.get('catalogid'),
						itemid: item.get('itemid'),
						discountcode: item.get('discountcode'),
						qty: Math.floor(item.get('qty')),
					});
					cart.pushObject(tmp);
				}
				else
				{
					//the itme is already in the cart, update the new qty
					rval.forEach(function(dup)
					{
			//			console.log('Dup::' + dup.get('name'));
						dup.set('qty', Math.floor(item.get('qty')));
					});
				//	rval.set('qty', item.get('qty'));
				}
				if(item.get('reoccuring')) //add to monthlyorder
				{
					console.log('in the reoccuring');
					var monthlyController = t.get('monthlyController');
					var monthlyOrder = monthlyController.get('monthlyorder');

					var ptr = item.get('name').search("#");  //will need the position of the # for the substring
					
					rx = new RegExp(item.get('name').substring(0, ptr+1), 'gi');  //grab "Uncanny X-Men #"
					var bol=0;

					if(monthlyOrder)  //if monthly order has not been visted this will cause an issue, this happens if model has not been loaded (to /monthlyorder)
					{
						bol = monthlyOrder.filter(function(entry){
							return entry.get('name').match(rx);
						});
					}
					else
					{
						t.set('errorMesg', "Note::Either have not received reoccuring orders from server or none exist.  Duplicate Monthly orders may occur when visting /monthlyorder");
					}
					console.log('bol is::'+ bol);
					if(bol==0)  //check if it is already in monthlyorder
					{
						var tmp2 = t.store.createRecord('monthlyorder',
						{
							name: item.get('name').substring(0, ptr+1),
							qty: Math.floor(item.get('qty')),
						});
						console.log(tmp2.get('name') + "::"+tmp2.get('qty'));
						tmp2.save();
					}
					else
					{
						bol.forEach(function(dup)
						{
							dup.set('qty', Math.floor(item.get('qty')));
							dup.save();
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
	//			console.log('ine the else monthlyorder::' + monthlyorder)

				monthlyorder.forEach(function(item)
				{
					var rx = new RegExp(item.get('name')+'\\d+(\\s+\\(OF\\s+\\d+\\))?$', 'gi');  //prevents ordering of varients which have extra stuff after #\D+
	//				console.log('in the foreach rx is::' + rx);
					var entry= catalog.filter(function(catalogItem)
					{
						return catalogItem.get('name').match(rx);
					});
	//				console.log('entry is ::' + entry)
					if(entry != 0)
					{	t.set('errorMesg', "");
		//				console.log('In the addMonthlyOrder if::'+ entry.get('name') + "::" + entry.get('qty'));
						entry.forEach(function(merch)
						{
							merch.set('qty', Math.floor(item.get('qty')));
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
	//		console.log('The preview catalog is::' + previewSel.name);
		}.property('selectName'),

	}
});
