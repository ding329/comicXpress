import Ember from 'ember';

export default Ember.Component.extend({
	authController: null,
	actions:
	{
		logout: function()
		{
			var authController = this.get('authController');
			authController.send('logout');
		//	authController.set('loggedIn', false);
		//	this.transitionTo('auth');
		},
	}
});
