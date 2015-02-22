angular.module("sunrise-times.services", []).
	factory('getSunriseService', function($http) {
		var sunriseAPI = {};

		sunriseAPI.getSunrise = function() {
			return $http({
				method: 'JSONP',
				url: "http://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today"
			});
		}

		return sunriseAPI;
});