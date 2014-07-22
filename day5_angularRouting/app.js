var mainApp = angular.module("Institutions", ["ngRoute", "controllers"]);

mainApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/schools", {
		templateUrl: "pages/schools/schools.html",
		controller: "schoolController"
	}).when("/colleges", {
		templateUrl: "pages/colleges/colleges.html",
		controller: "collegeController"
	}).otherwise({
		redirectTo: "/schools"
	})
}]);