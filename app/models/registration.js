import DS from 'ember-data';



//http://offirgolan.github.io/ember-cp-validations/docs/validating/index.html
//import { attr, Model } from "ember-cli-simple-store/model";

export default DS.Model.extend({
  'username': DS.attr('string'),
  'password': DS.attr('string'),
  'email': DS.attr('string'),
  'storeName': DS.attr('string'),
  //'details': DS.belongsTo('user-detail')
});


/*
registration = DS.Model
  'username': DS.attr('string'),
  'password': DS.attr('string'),
  'email': DS.attr('string'),
  'storeName': DS.attr('string'),

registration.reopen 
  validations:
    username:
      presence: true
      length:{minimum:5}
    password:
      presence: true
      length: {minimum:8}
    email:
      presence:true
    storeName:
      presence:true
*/