import Ember from 'ember';

export default Ember.Controller.extend({

	username: '',
	isLoggedIn: false,
	errorMsg: '',
	actions: {
		login: function(){
            //do stuff to authenticate here
            var username = this.get('username');
            var password = this.get('password');
        //    var remember = this.get('remember');
            var data = {
                'username': username,
                'password': password};
            var controllerObj = this;
            Ember.$.post('../api/session/', data, function(response){
                if(response.isauthenticated){
                    //success
                    console.log('Login POST Request to ../api/session/ was successful.');
                    controllerObj.set('username', response.username);
                    controllerObj.set('userid', response.userid);
                    controllerObj.set('isLoggedIn', true);
                } else{
                    //errors
                    console.log('Login POST Request to ../api/session/ was successful.');
                    controllerObj.set('errorMsg', response.message);
                }
            });
        },
		logout: function(){
         //   var remember = this.get('remember');;
            var controllerObj = this;
            Ember.$.ajax({url: '../api/session/', type: 'DELETE'}).then(
            function(response){
                console.log('Logout success.');
                controllerObj.set('isLoggedIn', false);
                controllerObj.set('errorMsg', '');
                controllerObj.set('username', '');
                controllerObj.set('userid', '');
           //     if(!remember){
                    //save to username and pass to local storage

             //   }
                controllerObj.transitionToRoute('auth');
            })

        },
		goRegister: function(){
			this.transitionTo('register');
		}
	}

});

