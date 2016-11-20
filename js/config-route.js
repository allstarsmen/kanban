app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("page/main");

  $stateProvider
  .state('page', {
    abstract: true,
    url: '/page',
    templateUrl: 'view/page.template.html'
  })
  .state('page.main', {
    url: '/main',
    templateUrl: 'view/main.html'
  });
});
