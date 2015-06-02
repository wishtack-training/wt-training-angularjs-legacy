/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').provider('configWishlist', function () {

        this.apiRootUrl = '/api/v1/';

        this.$get = function $get() {
            return this;
        };

    });

})();
