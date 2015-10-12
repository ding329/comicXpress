import Ember from 'ember';

export default Ember.Controller.extend({

	username: '',
	password: '',
	storeName: '',
	email: '',
	isButtonDisabled: Ember.computed('username', 'storeName', 'password', 'email',function(){
		return Ember.isEmpty(this.get('username')) || Ember.isEmpty(this.get('storeName')) || Ember.isEmpty(this.get('password')) || Ember.isEmpty(this.get('email'));
	}),

	//items below do not work right now
	isPasswordStrong: Ember.computed('password', function(){
		return (this.get('password').length >8);
	}) 



});
