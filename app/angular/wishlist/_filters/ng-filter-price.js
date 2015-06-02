/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').filter('wlPrice', function ($filter) {

        return function wlPrice(price) {

            var amount = null;
            var currencySymbol = null;
            var currencySymbolDict = {
                'EUR': '€',
                'USD': '$'
            };

            if (price.coefficient == null || price.exponent == null || price.currency == null) {
                return null;
            }

            amount = price.coefficient * Math.pow(10, price.exponent);
            currencySymbol = currencySymbolDict[price.currency];

            return $filter('currency')(amount, currencySymbol);

        }

    });

})();
