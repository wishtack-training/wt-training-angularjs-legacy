/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    angular.module('wishlist.user').provider('configUser',
        function (configWishProvider) {

            this.stateList = [
                {
                    name: 'userDetail',
                    url: '/users/:userId',
                    views: {
                        '': {
                            controller: 'ControllerUserDetail',
                            templateUrl: '/assets/angular/wishlist/user/ng_user_detail.html'
                        },
                        '@userDetail': {
                            controller: 'ControllerWishList',
                            templateUrl: '/assets/angular/wishlist/user/wish/ng_wish_list.html'
                        }
                    }
                },
                {
                    name: 'userList',
                    controller: 'ControllerUserList',
                    url: '/users',
                    templateUrl: 'wishlist/user/ng_user_list.html'
                }
            ];

            this.stateList = this.stateList.concat(configWishProvider.stateList);

            this.$get = function $get() {
                return this;
            };

        });

})();
