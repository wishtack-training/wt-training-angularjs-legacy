/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist').controller('ControllerUser',
        function ($http,
                  $scope) {

            var userListUrl = '/api/v1/users/';

            /* Wait for resource before showing anything. */
            $scope.isViewReady = false;
            $scope.formUser = {};
            $scope.user = null;

            /**
             * Send user to API.
             * @param args{user:User}
             */
            $scope.saveUser = function saveUser(args) {

                var method = 'post';
                var userResourceUrl = userListUrl;
                var user = args.user;

                if ($scope.user != null) {
                    userResourceUrl += $scope.user.id + '/';
                    method = 'patch';
                }

                $http[method](userResourceUrl, user).success(function (data) {
                    $scope.user = data;
                    $scope.formUser = angular.copy($scope.user);
                });

            };

            /**
             * Remove user from API.
             */
            $scope.removeUser = function removeUser(args) {

                var user = args.user;

                $http.delete(userListUrl + user.id + '/').success(function () {
                    $scope.user = null;
                    $scope.formUser = null;
                });

            };

            /**
             * Retrieve users from API.
             */
            $http.get(userListUrl).success(function (data) {

                var userList = data.objects;

                if (userList.length > 0) {
                    $scope.user = userList[0];
                    $scope.formUser = angular.copy($scope.user);
                }

                $scope.isViewReady = true;

            });

        });

})();
