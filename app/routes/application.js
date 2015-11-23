import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	authController: null,
	beforeModel: function(transition){
		this.authCheck(transition);
		//will have other stuff here once its connected to restapi
	},
	authCheck: function(transition){
		//Method to check user credentials and redirect if necessary
		console.log('Checking authentication');
		var t = this;
		var auth = t.controllerFor('auth');
		var previoustrans = t.get('currentTransition');
		console.log('User attempting to access: /'+transition.targetName);
		if(!auth.isLoggedIn){
			if(transition.targetName == 'register')
			{
				//I dont know a better way to do this
			}
			else if(transition.targetName !== 'auth'){
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenicated, redirecting');
				t.transitionTo('auth');
			}
		}
		else if(previoustrans){
			console.log('Redirecting back to original request: /'+previoustrans.targetName);
			t.set('currentTransition', null);
			previoustrans.retry();
		}
	},
	setupController: function(controller, model)
	{
		controller.set('authController', this.controllerFor('auth'));
	},
	actions: {
		willTransition: function(transition){
			this.authCheck(transition);
		}
	}
});
