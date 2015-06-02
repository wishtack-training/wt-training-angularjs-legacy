/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').controller('ControllerUser', function ($scope) {

        $scope.user = {};

        $scope.saveUser = function saveUser(args) {

            $scope.user = angular.copy(args.user);

        };

    });

})();
