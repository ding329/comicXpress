import Ember from 'ember';

import EmberValidations from 'ember-validations';

//export default Ember.Controller.extend(EmberValidations);
//some sources say it should be Mixin,  author has Ember.Validations.Mixin on his slides
export default Ember.Controller.extend(EmberValidations, {

	username: null,
	password: null,
	storename: null,
	email: null,

	actions:
	{
		register: function()
		{
			console.log('it worked');
		}
	},
/*	
	validations: 
	{
		'registration.username':
		{
			presence: true,
			length: { minimum: 5, message:{tooShort:'should be more than 5 characters'} }
		},
		'registration.password': 
		{
			presence: true,
			length: { minimum: 8, messages:{tooShort:'Password must be at least 8 characters'}}
		},
		'registration.storeName':
		{
			presence: true,
		},
		'registration.email':
		{
			presence: true,
		},
		'registration.profile': true,
	}
*/

//	registration:null,

/*	isButtonDisabled: Ember.computed('username', 'storeName', 'password', 'email',function(){
		return Ember.isEmpty(this.get('username')) || Ember.isEmpty(this.get('storeName')) || Ember.isEmpty(this.get('password')) || Ember.isEmpty(this.get('email'));
	}),
*/

/*
	actions:
	{
		
	}
*/


});
