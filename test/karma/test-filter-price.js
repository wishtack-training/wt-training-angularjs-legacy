/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */


(function () {

    describe('wlPrice', function () {

        var $compile = null;
        var $filter = null;
        var $rootScope = null;

        /*
         * Loading modules.
         */
        beforeEach(angular.mock.module('wishlist'));

        /*
         * Loading services.
         */
        beforeEach(angular.mock.inject(
                function (_$compile_,
                          _$filter_,
                          _$rootScope_) {

                    $compile = _$compile_;
                    $filter = _$filter_;
                    $rootScope = _$rootScope_;

                })
        );

        it('should display price', function () {

            expect($filter('wlPrice')({coefficient: 1001, currency: 'USD', exponent: -2})).toBe('$10.01');

        });

        it('should handle invalid price', function () {

            expect($filter('wlPrice')({coefficient: null, currency: 'USD', exponent: -2})).toBe(null);

        });
    });

})();
