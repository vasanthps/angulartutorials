var controllers = angular.module("controllers", []);

controllers.controller("schoolController", function($scope){
	$scope.schools = ["School A", "School B", "School C"];
});