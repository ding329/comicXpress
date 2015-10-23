import Ember from 'ember';

import EmberValidations from 'ember-validations';


//some sources say it should be Mixin
export default Ember.Controller.extend(Ember.Validations.Mixin, {
	registration:null,

	actions:
	{

	},
	validations: 
	{
		'model.username':
		{
			presence: true,
			length: { minimum: 5 }
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
	}


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
