import Ember from 'ember';

import EmberValidations from 'ember-validations';

//export default Ember.Controller.extend(EmberValidations);
//some sources say it should be Mixin,  author has Ember.Validations.Mixin on his slides
export default Ember.Controller.extend(EmberValidations, {

	username: null,
	password: null,
	storename: null,
	errorMesg: null,
	email: null,

	isButtonDisabled: Ember.computed('username', 'storename', 'password', 'email', function(){
		return Ember.isEmpty(this.get('username')) || Ember.isEmpty(this.get('storename')) || Ember.isEmpty(this.get('password')) || Ember.isEmpty(this.get('email'));
	}),

	actions:
	{
		register: function()
		{
			var username = this.get('username');
            var password = this.get('password');
            var storename = this.get('storename');
            var email = this.get('email');
            var t = this;
            t.set('errorMesg', '');

            console.log('it worked::'+ username);

        //    var remember = this.get('remember');
            var data = {
                'username': username,
                'password': password,
                'storename' : storename,
                'email' : email,
            };
        //    var controllerObj = this;
            console.log('before the post');
            Ember.$.post('../api/registration/', data, function(response){
  				t.set('errorMesg', response.message);
 
            });
		},
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




});
