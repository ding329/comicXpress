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
    console.log('rval is::', + rval);
    var t=this;
    if(!(rval >0))
    {
        rval='0';
        t.set('qty', 0);
        console.log('in the rval if::'+ rval);
    }
    else
    {
      rval=rval.toFixed(2);
      t.set('qty', Math.floor(t.get('qty')));  //if you cant get validation libary to work make your own
    }
    return rval;
  }.property('price', 'qty')
});	
