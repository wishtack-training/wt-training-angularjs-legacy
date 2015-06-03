/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user.wish').directive('wlWishPreview', function (configWishlist) {

        return {
            controller: ['$scope', function ($scope) {

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


            }],
            replace: true,
            restrict: 'E',
            scope: {
                user: '=wlUser',
                wish: '=wlWish'
            },
            templateUrl: configWishlist.assetsAngularUrl + 'wishlist/user/wish/ng_wish_preview.html'
        };

    });

})();
