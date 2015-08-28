'use strict';

angular.module('myApp.view1_services',[])

.factory('TeamService', function ($resource) {
	return $resource('http://localhost:3000/teams/:team_id', {
            team_id: "@team_id"
        }
	);
    
});

