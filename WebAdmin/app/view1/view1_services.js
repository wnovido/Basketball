'use strict';

angular.module('myApp.view1_services',[])
.factory('UserService', function ($resource) {
    // return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
	return $resource('http://localhost:3000/teams/:team_id', {
            team_id: "@team_id"
        }
	);
    
});

