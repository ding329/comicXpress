import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('string'),
  catalogId: DS.attr('string'),
  itemId: DS.attr('string'),
  discountCode: DS.attr('string'),
  qty: DS.attr('number'),
  total: DS.attr('string'),
 
});
