var routed = angular.module('routed', [/*'ui.bootstrap', 'textAngular', 'uiSwitch', 'sticky', 'ngAnimate', 'ngCookies', 'ngSanitize', 'ngCsv',*/ 'ngRoute', /*'ui.sortable', 'ngScrollTo', 'ngStorage',*/ 'ui.router', 'uiGmapgoogle-maps'/*, 'ngFileUpload', 'Toaster', 'anguFixedHeaderTable', 'angular-confirm', 'color.picker', 'chart.js', 'rzModule'*/]);

routed.config(['$provide', '$routeProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function($provide, $routeProvider, $locationProvider, $stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('routed', {
    url: '/',
    templateUrl: 'views/home/home-view.html',
    controller: 'MainCtrl',
    controllerAs: 'vm'
  })
  .state('nerds', {
    url: '/nerds',
    templateUrl: 'views/nerd/nerd-view.html',
    controller: 'NerdCtrl',
    controllerAs: 'vm'
  })
  .state('map', {
    url: '/map',
    templateUrl: 'views/map/map-view.html',
    controller: 'MapCtrl',
    controllerAs: 'vm'//,
    // resolve: {
    //   Center: function(LocationService, $q){
    //     var deferred = $q.defer()
    //     LocationService.getCoords().then(function(coords){
    //       coords.latitude = coords.lat;
    //       coords.longitude = coords.lon;
    //       deferred.resolve(coords);
    //     })
    //     return deferred.promise;
    //   }//,
    //   Crags: function(AdventureService) {  //<--this will load points on load
    //     return AdventureService.getRockNear();
    //   },
    //   Sites: function(AdventureService) {  //<--this will load points on load
    //     return AdventureService.getCampNear();
    //   },
    //   Trails: function(AdventureService) {  //<--this will load points on load
    //     return AdventureService.getHikeNear();
    //   }
    // }
  })

  $locationProvider.html5Mode(true);
}]);

routed.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyBpmLVSs3sK2VfNHre_la0aqbYnrSSeTqY',
    v: '3.23',
    libraries: 'weather,geometry,visualization'
  });
}]);


