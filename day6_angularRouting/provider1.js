var controllers = angular.module("controllers");

controllers.provider("provider1", function(){
	var sharedVariable = 0;
	var provider = {};
	
	provider.getVar = function(){
		return sharedVariable;
	}
	
	provider.setVar = function(value){
		sharedVariable = value;
	}
	
	this.setInitialValue = function(value){
		sharedVariable = value;
	}
	
	this.$get=function(){
		return provider;
	}
});