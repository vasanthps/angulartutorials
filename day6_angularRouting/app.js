var mainApp = angular.module("Institutions", ["ngRoute", "controllers"]);

mainApp.config(["$routeProvider", "provider1Provider", function($routeProvider, provider1Provider){
	$routeProvider.when("/schools", {
		templateUrl: "pages/schools/schools.html",
		controller: "schoolController"
	}).when("/colleges", {
		templateUrl: "pages/colleges/colleges.html",
		controller: "collegeController"
	}).otherwise({
		redirectTo: "/schools"
	});
	
	provider1Provider.setInitialValue(10);
}]);