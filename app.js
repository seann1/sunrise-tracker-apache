var app = angular.module("sunrise-times", []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.posts = [];

		$scope.getTimes = function() {

			var address = $scope.address + ", " + $scope.city + ", " + $scope.state;
			address = address.toString();

			$.ajax({
    		crossOrigin: true,
    		url: "http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today",
    		headers: {
                "Accept" : "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8"
            },
    		success: function(data) {
    			var json = JSON.parse(data);
    			console.log(data);
    		}
			});


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