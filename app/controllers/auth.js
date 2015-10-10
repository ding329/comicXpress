import Ember from 'ember';

export default Ember.Controller.extend({

	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//do stuff to authenticate here
			this.set('loggedIn', true);
			this.transitionTo('order');
		},
		logout: function(){
			this.set('loggedIn', false);
			this.transitionTo('auth');
		},
		goRegister: function(){
			this.transitionTo('register');
		}
	}

});

