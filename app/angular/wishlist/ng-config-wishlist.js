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

})();
