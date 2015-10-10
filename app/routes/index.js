import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	redirect: function(model, transition){
		var auth = this.controllerFor('auth');
		var previoustrans = this.get('currentTransition');
		if(!auth.loggedIn){
			console.log(transition.targetName);
			if(transition.targetName != 'auth'){
				this.set('currentTransition', transition);
				transition.abort();
				console.log('not signed in, redirecting');
				console.log(previoustrans);
				this.transitionTo('auth');
			}
		}
		else if(previoustrans){
			console.log(previoustrans);
			previoustrans.retry();
		}
		//will have other stuff here once its connected to restapi
	},

});
