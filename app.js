var app = angular.module("sunrise-times", []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.posts = [];

		$scope.getTimes = function() {
			$.getJSON("http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400", function(data) {
    	// Get the element with id summary and set the inner text to the result.
    	data = data.addHeader("Access-Control-Allow-Origin", "*");
    	console.log(data);
			});

			var address = $scope.address + ", " + $scope.city + ", " + $scope.state;
			address = address.toString();

			console.log(address);


			var geocoder = new google.maps.Geocoder();
			geocoder.geocode( { 'address': address}, function(results, status) {
  			if (status == google.maps.GeocoderStatus.OK)
  		{
      // do something with the geocoded result
      //
      console.log(results);
			console.log(results[0].geometry.location.lat());
      console.log(results[0].geometry.location.lat());
  			}
			});

			$scope.address = '';
			$scope.city = '';
			$scope.state = '';
			$scope.startDate = '';
			$scope.endDate = '';
		}; //end of getTimes();
									 

	}]);