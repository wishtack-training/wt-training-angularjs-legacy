/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

(function () {

    describe('ControllerUserList', function () {

        var $controller = null;
        var $httpBackend = null;
        var $rootScope = null;

        /*
         * Loading modules.
         */
        beforeEach(angular.mock.module('wishlist'));

        /*
         * Loading services.
         */
        beforeEach(angular.mock.inject(
            function (_$controller_,
                      _$httpBackend_,
                      _$rootScope_) {

                $controller = _$controller_;
                $httpBackend = _$httpBackend_;
                $rootScope = _$rootScope_;

            })
        );

        /*
         * Outstanding expectations and requests check.
         */
        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should load users', function () {

            /* Creating a new scope. */
            var scope = $rootScope.$new();

            /* Expecting a call to users list API. */
            $httpBackend.expectGET('/api/v1/users/')
                .respond({
                    "meta": {"limit": 20, "next": null, "offset": 0, "previous": null, "totalCount": 2},
                    "objects": [
                        {
                            "email": "lionel@wishtack.com",
                            "firstName": "Lionel",
                            "id": "556f143d572c7d02a79cea28",
                            "lastName": "LAFFARGUE"
                        },
                        {
                            "email": "younes@wishtack.com",
                            "firstName": "Younes",
                            "id": "556f1431572c7d02a79cea27",
                            "lastName": "JAAIDI"
                        }
                    ]
                });

            /* Loading the controller. */
            $controller('ControllerUserList', {
                $scope: scope
            });

            /* Flushing response. */
            $httpBackend.flush();

            expect(scope.userList.length).toBe(2);
            expect(scope.userList[0].firstName).toBe('Lionel');
            expect(scope.userList[1].firstName).toBe('Younes');

        });

    });

})();
