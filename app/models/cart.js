import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('string'),
  catalogId: DS.attr('string'),
  itemId: DS.attr('string'),
  qty: DS.attr('number'),
  setLabel: function()
  {
		return this.get('catalogId') + " | " + this.get('itemId') + " | " + this.get('qty') + " | " + this.get('name') + " | " + this.get('price');
  }.property('catalogId', 'itemId', 'qty', 'name', 'price')

});
