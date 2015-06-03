/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user.wish').controller('ControllerWishList',
        function ($scope,
                  $stateParams,
                  WishlistRestangular) {

            var User = WishlistRestangular.all('users');

            var userId = $stateParams.userId;

            /* Wait for resource before showing anything. */
            $scope.user = {};

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
             * Retrieve users from API.
             */
            User.get(userId).then(function (user) {

                $scope.user = user;

                /* Update user wishes. */
                $scope.user.all('wishes').getList().then(function (wishList) {
                    $scope.user.wishList = wishList;
                });

            });

        });

})();
