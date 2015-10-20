import DS from 'ember-data';

/*  
This is the structure for the reoccuring order information 
*/

export default DS.Model.extend({
	 name: DS.attr('string'),
 	 qty: DS.attr('number'),
});
