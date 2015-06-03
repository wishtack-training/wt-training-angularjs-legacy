/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').provider('configWishlist', function () {

        this.apiRootUrl = '/api/v1/';

        this.assetsUrl = '/assets/';
        this.assetsAngularUrl = this.assetsUrl + 'angular/';

        this.$get = function $get() {
            return this;
        };

    });

    angular.module('wishlist').config(
        function ($locationProvider,
                  $stateProvider,
                  $urlRouterProvider,
                  configWishlistProvider) {

            var assetsAngularUrl = configWishlistProvider.assetsAngularUrl;

            /* Enable Html5 mode. */
            $locationProvider.html5Mode(true);

            /* Default route. */
            $urlRouterProvider.otherwise('/user');

            $stateProvider
                .state('userList', {
                    controller: 'ControllerUser',
                    url: '/user',
                    templateUrl: assetsAngularUrl + 'wishlist/user/ng_user.html'
                });

        }
    );

})();
