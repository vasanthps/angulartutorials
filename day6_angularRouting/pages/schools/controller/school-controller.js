var controllers = angular.module("controllers", []);

controllers.controller("schoolController", function($scope, service1, provider1){
	console.log(service1.getVar());
	service1.setVar(service1.getVar()+1);
	
	console.log(provider1.getVar());
	provider1.setVar(provider1.getVar()+1);
	
	$scope.schools = ["School A", "School B", "School C"];
});