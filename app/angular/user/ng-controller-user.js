/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').controller('ControllerUser', function ($scope) {

        var userList = [
            {
                email: 'foo@bar.com',
                firstName: 'Foo',
                lastName: 'BAR'
            },
            {
                email: 'wish@tack.com',
                firstName: 'Wish',
                lastName: 'TACK'
            }
        ];

        $scope.user = userList[0];

        $scope.switchUser = function switchUser(userIndex) {
            $scope.user = userList[userIndex];
        };

    });

})();
