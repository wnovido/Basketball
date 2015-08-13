'use strict';

angular.module('myApp.view1_services',[])
.factory('UserService', function ($resource) {
    // return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
	return $resource(
		'http://localhost:3000/teams/:team_id',
		{team_id: "@team_id"}
		//, {'query': { method: 'GET', isArray: false}}
	);
    
});

/*
angular.module('myApp.view',[]).factory('Movie',function($resource){
    return $resource('http://movieapp-13434.onmodulus.net/api/movies/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
*/