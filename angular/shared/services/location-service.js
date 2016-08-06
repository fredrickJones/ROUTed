angular.module('routed')
  .factory('LocationService', ['$http', '$q', 'uiGmapGoogleMapApi',
  function LocationService($http, $q, uiGmapGoogleMapApi) {
    'use strict';
    return {
      // call to get all nerds
      getCoords : function() {
        var userMarker = [];
        // console.log("in service");
        var centerDfd = $q.defer();
        navigator.geolocation.getCurrentPosition(function(position) {
          centerDfd.resolve(
            {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            });
        }, function(err) {

        }, {
          enableHighAccuracy: true
        });
        return centerDfd.promise;
      },

      // call to POST and create a new nerd
      getWeather : function(lat, lon) {
        var deferred = $q.defer();
        $http.get('/weather?lat' + lat.toFixed(0) + '&lon=' + lon.tofixed(0)).then(function(data) {
            deferred.resolve(data.data);
        });
        return deferred.promise;
      },

      // call to DELETE a nerd
      delete : function(id) {
        return $http.delete('/api/nerds/' + id);
      }
    }    

}]);


