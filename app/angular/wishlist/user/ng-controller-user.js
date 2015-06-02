/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user').controller('ControllerUser',
        function ($http,
                  $scope,
                  WishlistRestangular) {

            var User = WishlistRestangular.all('users');

            /* Wait for resource before showing anything. */
            $scope.isViewReady = false;
            $scope.formUser = {};
            $scope.user = null;

            /**
             * Send user to API.
             * @param args{user:User}
             */
            $scope.saveUser = function saveUser(args) {

                var promise = null;
                var user = args.user;

                if (user.save != null) {
                    promise = user.save();
                }
                else {
                    promise = User.post(user);
                }

                promise.then(function (user) {
                    $scope.user = user;
                    $scope.formUser = WishlistRestangular.copy($scope.user);
                });

            };

            /**
             * Remove user from API.
             */
            $scope.removeUser = function removeUser(args) {

                args.user.remove().then(function () {
                    $scope.user = null;
                    $scope.formUser = {};
                });

            };

            /**
             * Retrieve users from API.
             */
            User.getList().then(function (userList) {

                if (userList.length > 0) {
                    $scope.user = userList[0];
                    $scope.formUser = WishlistRestangular.copy($scope.user);
                }

                $scope.isViewReady = true;

            });

        });

})();
