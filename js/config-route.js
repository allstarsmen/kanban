app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("access/signin");

  $stateProvider
  // outside pages
  .state('access', {
    abstract: true,
    url: '/access',
    templateUrl: 'view/access.template.html'
  })
  .state('access.signin', {
    url: '/signin',
    templateUrl: 'view/access.signin.html',
    controller: 'SignInController'
  })
  // inside pages
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
