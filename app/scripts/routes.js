'use strict';

angular.module('myApp').config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/domains/ldap_connections', {
      templateUrl: 'views/domains/ldap_connections.html',
      controller: 'ResetCtrl'
    });
    $routeProvider.when('/domains/domain_patterns', {
      templateUrl: 'views/domains/domain_patterns.html',
      controller: 'ResetCtrl'
    });
    $routeProvider.when('/domains/management', {
      templateUrl: 'views/domains/domain_management.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.when('/parameters/functionalities', {
      templateUrl: 'views/parameters/functionalities.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.when('/parameters/mails_personalization', {
      templateUrl: 'views/parameters/mails_personalization.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.when('/users', {
      templateUrl: 'views/users.html',
      controller: 'ResetCtrl'
    });
    $routeProvider.when('/users/management', {
      templateUrl: 'views/users/user_management.html',
      controller: 'ResetCtrl'
    });
    $routeProvider.when('/users/threads', {
      templateUrl: 'views/users/threads.html',
      controller: 'ResetCtrl'
    });
    $routeProvider.when('/users/mailing_lists', {
      templateUrl: 'views/users/mailing_lists.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.when('/audit', {
      templateUrl: 'views/audit.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.when('/charts', {
      templateUrl: 'views/charts.html',
      controller: 'ResetCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/users/management'
    });
  }
]);
