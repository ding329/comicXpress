import Ember from 'ember';

export default Ember.Component.extend({
	actions:
	{
		removeItem: function()
		{
			var item=this.get('item');
			this.sendAction("removeItem", item);
		},
		getQty: function()
		{
			var item=this.get('item');
			item.set('qty', Math.floor(item.get('qty')));
			item.save();
		},
	}
});
