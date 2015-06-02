/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').directive('wlPriceAmount', function() {
        return {
            require: 'ngModel',
            link: function(scope, element, attrs, modelCtrl) {

                modelCtrl.$parsers.push(function (value) {

                    if (value == null) {
                        return value;
                    }

                    return {
                        coefficient: Math.round(value * 100),
                        currency: modelCtrl.$modelValue ? modelCtrl.$modelValue.currency : null,
                        exponent: -2
                    };

                });

                modelCtrl.$formatters.push(function (value) {

                    if (value != null && value.coefficient != null && value.exponent != null) {
                        return value.coefficient * Math.pow(10, value.exponent);
                    }

                    else {
                        return null;
                    }

                });

                modelCtrl.$validators.integer = function(modelValue, viewValue) {

                    return (viewValue == null) || (viewValue === '') || (viewValue > 0);

                };

            }
        };
    });

})();
