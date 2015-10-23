import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('string'),
  catalogId: DS.attr('string'),
  itemId: DS.attr('string'),
  discountCode: DS.attr('string'),
  qty: DS.attr('number'),
//  total: DS.attr('string'),
  total: function()
  {
	var rval=this.get('qty') * this.get('price');
	if(!(rval >0))
	{
		rval='0';
	}
	return rval.toFixed(2);
  }.property('price', 'qty')
});	
