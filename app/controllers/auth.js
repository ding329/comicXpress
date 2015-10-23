import Ember from 'ember';

export default Ember.Controller.extend({

	username: '',
	loggedIn: false,
	errorMsg: '',
	actions: {
		login: function(){
			//do stuff to authenticate here
			this.set('loggedIn', true);
			this.transitionTo('monthlyorder');
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

