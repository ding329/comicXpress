import Ember from 'ember';


export default Ember.Component.extend({
//	catalog: null,
//	carts: cartCollection.create(),
	isComic: function()
	{
		var catalog = this.get('catalog');
	//	console.log('iscomic::' + catalog.get('name') + " " + catalog.get('categoryCode'));
		return catalog.get('categorycode')=='1';
	}.property('categorycode'),
	actions:
	{
		addItem: function()
		{
			var catalog= this.get('catalog');
//		console.log('add item component');
			//catalog.save(); //for sending to server
			this.sendAction("addItem", catalog);
			return true;
		},
	}
});
