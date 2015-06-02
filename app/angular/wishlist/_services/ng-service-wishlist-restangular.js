/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').factory('WishlistRestangular',
        function (Restangular,
                  configWishlist) {

            return Restangular.withConfig(function (RestangularConfigurer) {

                /* Setting Restangular's api base URL. */
                RestangularConfigurer.setBaseUrl(configWishlist.apiRootUrl);

                /* @hack: Tastypie mongo hates receiving data in DELETE requests. */
                RestangularConfigurer.addRequestInterceptor(function (elem, operation) {
                    if (operation === 'remove') {
                        return null;
                    }
                    return elem;
                });

                RestangularConfigurer.setRequestSuffix('/');

                RestangularConfigurer.addResponseInterceptor(function (response, operation, what, url) {
                    var newResponse = null;
                    if (operation === 'getList') {
                        newResponse = response.objects;
                        newResponse.metadata = response.meta;
                    } else {
                        newResponse = response;
                    }
                    return newResponse;
                });
            });

        });

})();
