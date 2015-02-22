angular.module('sunrise-times.controllers', []).
  controller('sunriseController', function($scope, getSunriseService) {
    $scope.nameFilter = null;
    $scope.sunriseData = [];


    var mySunriseServiceMachineWidget = getSunriseService;
    var resultsFromSunriseServer = mySunriseServiceMachineWidget.getSunrise();

    resultsFromSunriseServer.success(function(response) {
    	console.log(response);
    });

    // getSunriseService.getSunrise().success(function (response) {
    //     console.log(response);
    //     //Dig into the responde to get the relevant data
    //     // $scope.sunriseDat = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    // });
  });