'use strict';

/**
 * @ngdoc function
 * @name sapientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sapientApp
 */
angular.module('sapientApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http.get('scripts/carousel-data.json').success (function(result){
    	$scope.finalData=result;
    })
  });
  function checkPass()
	{
    var pass = document.getElementById('pwd');
    var cpass = document.getElementById('cpwd');
    var message = document.getElementById('confirmMessage');
    var trueValue = "#66cc66";
    var falseValue = "#ff6666";
    if(pass.value === cpass.value){
        cpwd.style.backgroundColor = trueValue;
        message.style.color = trueValue;
        message.innerHTML = "Passwords Match!"
    }else{
        cpwd.style.backgroundColor = falseValue;
        message.style.color = falseValue;
        message.innerHTML = "Passwords Do Not Match!"
    }
};
