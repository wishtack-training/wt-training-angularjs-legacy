/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    describe('wlPrice', function () {

        var $compile = null;
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
                          _$rootScope_) {

                    $compile = _$compile_;
                    $rootScope = _$rootScope_;

                })
        );

        it('should display price', function () {

            var scope = $rootScope.$new();
            var element = $compile('<input ng-model="price" step="any" type="number" wl-price-amount>')(scope);

            /* Setting input value. */
            element.val('10.01');

            /* Triggering input event manually. */
            element.triggerHandler('input');

            /* Checking scope value. */
            expect(scope.price).toEqual({coefficient: 1001, currency: null, exponent: -2});

            /* Editing scope value. */
            scope.price = {coefficient: 2002, exponent: -2, currency: null};

            scope.$apply();

            expect(element.val()).toBe('20.02');

        });

        it('should handle null input', function () {

            var scope = $rootScope.$new();
            var element = $compile('<input ng-model="price" step="any" type="number" wl-price-amount>')(scope);

            /* Triggering input event manually. */
            element.triggerHandler('input');

            /* Checking scope value. */
            expect(scope.price).toEqual(null);

        });

        it('should display nothing if price is invalid', function () {

            var scope = $rootScope.$new();

            var element = $compile('<input ng-model="price" step="any" type="number" wl-price-amount>')(scope);

            /* Editing scope value. */
            scope.price = {coefficient: null, exponent: -2, currency: null};

            scope.$apply();

            expect(element.val()).toBe('');

        });
    });

})();