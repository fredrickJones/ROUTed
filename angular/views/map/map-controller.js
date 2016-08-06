angular.module('routed')
  .controller('MapCtrl', ['$scope', '$q', 'uiGmapGoogleMapApi', 'LocationService',
  function MapCtrl($scope, $q, uiGmapGoogleMapApi, LocationService) {
    'use strict';
    var vm = this;

    //////VARIABLES
    vm.map;
    vm.center = {};
    vm.User = {};
    vm.weather = {};
    vm.tagline = 'Get Your Maps Here!';

    //////METHODS
    vm.openWindow = openWindow;
    vm.closeWindow = closeWindow;

    //////INIT
    init();
    function init() {
      uiGmapGoogleMapApi.then(function(maps) {
        console.log(maps)
        vm.map = {
          zoom: 12,
          bounds: {},
          options: {
            scrollwheel: false,
            draggable: true,
            mapTypeControl: false,
            // mapTypeIds: google.maps.MapTypeId.TERRAIN,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
              style: 'SMALL'
            }
          },
          squaresMapType: {
            getTile: function(coord, zoom, ownerDocument) {
              var div = ownerDocument.createElement('div');
              div.innerHTML = coord;
              div.style.width = this.tileSize.width + 'px';
              div.style.height = this.tileSize.height + 'px';
              div.style.fontSize = '10';
              div.style.borderStyle = 'solid';
              div.style.borderWidth = '1px';
              div.style.borderColor = '#AAAAAA';
              return div;
            },
            tileSize: new google.maps.Size(256, 256),
            name: 'Black Squares',
            maxZoom: 19,
          }
        }
        console.log(vm.map)
      });
      LocationService.getCoords().then(function(coords){
        // console.log(coords)
        vm.center.latitude = coords.lat;
        vm.center.longitude = coords.lon;
      });
      vm.User = {
        id: "user",
        coords: {
          latitude: vm.center.latitude,
          longitude: vm.center.longitude
        },
        url: 'framework/images/user-marker.png',
      };
      vm.weather = {
        showWeather: true,
        weatherOptions: {
          temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
        }
      }
    }

    //////IMPLEMENTATION
    function openWindow() {

    }
    function closeWindow() {

    }

    //////HELPER FUNCTIONS


}]);


  
//   $scope.windowOptions = {
//     visible: false
//   };

//   $scope.viewSiteData = function(name, price) {
//     $scope.siteName = name;
//     $scope.sitePrice = price;
//   };
//   $scope.hideSiteData = function() {
//     $scope.windowOptions.visible = false;
//   };
//   $scope.viewUserLoc = function(location) {
//     // console.log(location);
//     $scope.userCoordsLat = location.latitude;
//     $scope.userCoordsLon = location.longitude;
//   };
//   $scope.hideUserLoc = function() {
//     $scope.windowOptions.visible = false;
//   };

// $scope.showWeather = true;
//   $scope.weatherOptions = {
//     temperatureUnits: 'TemperatureUnit.FAHRENHEIT'
//   };
