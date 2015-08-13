'use strict';

angular.module('myApp.view1_services',[])
.factory('UserService', function ($resource) {
    return $resource('http://jsonplaceholder.typicode.com/users/:user',{user: "@user"});
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