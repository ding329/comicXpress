import DS from 'ember-data';

/*
This is model for the structure to hold all the merchendise for a given month's preview catalog
*/

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('string'),
  catalogid: DS.attr('number'),
  itemid: DS.attr('string'),
  discountcode: DS.attr('string'),  //potential future action
  categorycode: DS.attr('string'),
  // genreCode: DS.attr('string'),  //poetial future aciton
  //familyCode: DS.attr('string'),  //potential future action
  orderdate: DS.attr('string'),
  selldate: DS.attr('string'),
  page: DS.attr('string'),
  qty: DS.attr('number'), 
  reoccuring: DS.attr('boolean', {defaultValue: false}),
  setLabel: function()
  {
		return this.get('catalogId') + " | " + this.get('itemId') + " | " + this.get('price') + " | " + this.get('orderDate') + " | " + this.get('name');
  }.property('catalogId', 'itemId', 'price', 'orderDate', 'name')


});
