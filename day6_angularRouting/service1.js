var controllers = angular.module("controllers");


controllers.factory("service2", function(){
	var sharedVariable = 0;
	var factory = {};
	
	factory.getVar = function(){
		return sharedVariable;
	}
	
	factory.setVar = function(value){
		sharedVariable = value;
	}
	return factory;
});

controllers.factory("service1", function(service2){
	var sharedVariable = 0;
	var factory = {};
	
	factory.getVar = function(){
		return sharedVariable;
	}
	
	factory.setVar = function(value){
		sharedVariable = value;
	}
	return factory;
});