import Ember from 'ember';

export default Ember.Component.extend({
	actions:
	{
		removeItem: function()
		{
			var item=this.get('item'); 
			this.sendAction("removeItem", item);
		},
	}
});
