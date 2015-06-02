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
            $scope.user = {};

            /**
             * Send user to API.
             * @param args{form: Form, user: User}
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
                });

            };

            /**
             * Remove user from API.
             */
            $scope.removeUser = function removeUser(args) {

                args.user.remove().then(function () {
                    $scope.user = {};
                });

            };

            /**
             * Add wish.
             * @param args{user: User, wish: Wish}
             */
            $scope.addWish = function addWish(args) {

                var user = args.user;
                var wish = args.wish;

                user.all('wishes').post(wish).then(function (wish) {
                    args.user.wishList = args.user.wishList || [];
                    args.user.wishList.push(wish);
                });

            };

            /**
             * Remove wish.
             * @param args{user: User, wish: Wish}
             */
            $scope.removeWish = function removeWish(args) {

                var user = args.user;
                var wish = args.wish;

                wish.remove().then(function () {
                    user.wishList.splice(_.indexOf(user.wishList, wish), 1);
                });

            };

            /**
             * Retrieve users from API.
             */
            User.getList().then(function (userList) {

                if (userList.length > 0) {

                    $scope.user = userList[0];

                    /* Update user wishes. */
                    $scope.user.all('wishes').getList().then(function (wishList) {
                        $scope.user.wishList = wishList;
                    });

                }

                $scope.isViewReady = true;

            });

        });

})();
