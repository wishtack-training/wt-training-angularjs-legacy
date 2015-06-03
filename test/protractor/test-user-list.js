/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

describe('user list', function testUserList() {

    it('should create user', function shouldCreateUser() {

        var PageUserList = require('./pages/page-user-list');

        var pageUserList = new PageUserList();

        var lionel = null;
        var younes = null;

        /* Go to page. */
        browser.get(pageUserList.pageUrl());

        /* Remove all existing users. */
        element.all(pageUserList.selectorButtonRemove()).each(function (button) {
            button.click();
        });

        /* Create new users. */
        pageUserList.createUser({
            firstName: 'Lionel',
            lastName: 'LAFFARGUE',
            email: 'lionel@wishtack.com'
        });

        pageUserList.createUser({
            firstName: 'Younes',
            lastName: 'JAAIDI',
            email: 'younes@wishtack.com'
        });

        /* Check users count. */
        expect(pageUserList.userCount()).toBe(2);

        /* Last user first. */
        younes = pageUserList.userInfoAt({row: 0});
        lionel = pageUserList.userInfoAt({row: 1});

        /* Checking elements content. */
        expect(younes.email).toBe('younes@wishtack.com');
        expect(younes.firstName).toBe('Younes');
        expect(younes.lastName).toBe('JAAIDI');

        expect(lionel.email).toBe('lionel@wishtack.com');
        expect(lionel.firstName).toBe('Lionel');
        expect(lionel.lastName).toBe('LAFFARGUE');

    });

});