'use strict';

angular
.module('main')
.config(config);
function config ($stateProvider, $urlRouterProvider) {
  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
    .state('main.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'main/templates/list.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })
    .state('main.listDetail', {
      url: '/list/detail',
      views: {
        'tab-list': {
          templateUrl: 'main/templates/list-detail.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })
    .state('main.debug', {
      url: '/debug',
      views: {
        'tab-debug': {
          templateUrl: 'main/templates/debug.html',
          controller: 'DebugCtrl as ctrl'
        }
      }
    })
    .state('main.test-page', {
      url: '/test-page',
      views: {
        'tab-test-page': {
          templateUrl: 'main/templates/test-page.html',
          controller: 'TestPageCtrl as ctrl'
        }
      }
    });
}
