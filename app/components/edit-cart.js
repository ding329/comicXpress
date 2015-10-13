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
			var item = this.get('item');
			if(item.get('qty')>0)
			{
				item.set('total', item.get('qty')*item.get('price'));
			}
			else{
				item.set('qty', 0);
				item.set('total', 0);
			}
		},
	}
});

