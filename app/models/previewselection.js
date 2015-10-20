import DS from 'ember-data';

/*
This the is container for the catalog ids read in from the server to perform the searches on
*/

export default DS.Model.extend({
  name: DS.attr('string'),
});
