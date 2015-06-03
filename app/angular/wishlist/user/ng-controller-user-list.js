/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user').controller('ControllerUserList',
        function ($scope,
                  WishlistRestangular) {

            var User = WishlistRestangular.all('users');

            $scope.userList = null;

            /**
             * Create user.
             * @param args{form: Form, user: User}
             */
            $scope.addUser = function addUser(args) {

                User.post(args.user).then(function (user) {

                    $scope.userList.push(user);

                });

            };

            /**
             * Remove user from API.
             */
            $scope.removeUser = function removeUser(args) {

                args.user.remove().then(function () {
                    $scope.userList.splice(_.indexOf($scope.userList, args.user), 1);
                });

            };

            /**
             * Retrieve users from API.
             */
            User.getList().then(function (userList) {

                $scope.userList = userList;

            });

        });

})();
