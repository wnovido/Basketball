angular.module('app.directives.teamApp',[]).
directive('teamInfo', function() {
	return {
		restrict: 'E',
		scope: {
			team: '=',
			title: '='
		},
		replace: true,
		templateUrl: "view1/teamInfo.html",
		link: function(scope, element, attrs) {
			console.log(attrs.id);
		},
		controller: function($scope) {
			console.log("teams: " + $scope.team);
		}
	};
});

        