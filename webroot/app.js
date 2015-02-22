var app = angular.module("sunrise-times", ['sunrise-times.services', 'sunrise-times.controllers']);

app.controller('MainCtrl', ['$scope', 'sunriseController', 'getSunriseService',
	function($scope, sunriseController, getSunriseService){
		$scope.posts = [];

		$scope.getTimes = function() {

			var address = $scope.address + ", " + $scope.city + ", " + $scope.state;
			address = address.toString();
			console.log(resultsFromSunriseServer);


			// var geocoder = new google.maps.Geocoder();
			// geocoder.geocode( { 'address': address}, function(results, status) {
  	// 		if (status == google.maps.GeocoderStatus.OK)
  	// 	{
   //    // do something with the geocoded result
   //    //

   //    console.log(results);
			// console.log(results[0].geometry.location.lat());
   //    console.log(results[0].geometry.location.lat());
  	// 		}
			// });

			// $scope.address = '';
			// $scope.city = '';
			// $scope.state = '';
			// $scope.startDate = '';
			// $scope.endDate = '';
		}; //end of getTimes();
									 

	}]);