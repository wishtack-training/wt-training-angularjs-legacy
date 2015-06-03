/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user').provider('configUser', function () {

        this.stateList = [
            {
                name: 'userDetail',
                controller: 'ControllerUserDetail',
                url: '/users/:userId',
                templateUrl: 'wishlist/user/ng_user_detail.html'
            },
            {
                name: 'userList',
                controller: 'ControllerUserList',
                url: '/users',
                templateUrl: 'wishlist/user/ng_user_list.html'
            }
        ];

        this.$get = function $get() {
            return this;
        };

    });

})();
