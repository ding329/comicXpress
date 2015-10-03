import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  price: DS.attr('string'),
  catalogId: DS.attr('string'),
  itemId: DS.attr('string'),
  //discountCode: DS.attr('string'),  //potential future action
  categoryCode: DS.attr('string'),
  // genreCode: DS.attr('string'),  //poetial future aciton
  //familyCode: DS.attr('string'),  //potential future action
  orderDate: DS.attr('string'),
  sellDate: DS.attr('string'),
  qty: DS.attr('string'),
});
