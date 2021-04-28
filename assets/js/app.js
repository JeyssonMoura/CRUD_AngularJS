angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('pagina1', {
            url: '/',
            templateUrl: 'templates/pagina1.html'
        })
        .state('pagina2', {
            url: '/pagina2',
            templateUrl: 'templates/pagina2.html'
        });
        $urlRouterProvider.otherwise("/");
});