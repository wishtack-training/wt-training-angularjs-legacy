/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user.wish').provider('configWish', function () {

        this.stateList = [
            {
                name: 'wishList',
                controller: 'ControllerWishList',
                templateUrl: 'wishlist/user/wish/ng_wish_list.html',
                url: '/users/:userId/wishes'
            }
        ];

        this.$get = function $get() {
            return this;
        };

    });

})();
