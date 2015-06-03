/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

var dejavu = require('dejavu');
var PageBase = require('./page-base');

module.exports = dejavu.Class.declare({

    $name: 'PageUserList',

    $extends: PageBase,

    pageUrl: function pageUrl() {
        return this.pageRootUrl() + '/users';
    },

    /**
     * @param args{email: string, firstName: string, lastName: string}
     */
    createUser: function createUser(args) {

        element(by.model('user.email')).sendKeys(args.email);
        element(by.model('user.firstName')).sendKeys(args.firstName);
        element(by.model('user.lastName')).sendKeys(args.lastName);
        element(by.css('form')).submit();

    },

    userCount: function userCount() {
        return element.all(this._userListRepeater()).count();
    },

    selectorButtonRemove: function selectorButtonRemove() {
        return by.buttonText('Remove');
    },

    /**
     * @param args{row: integer}
     * @returns {email: promise, firstName: promise, lastName: promise}
     */
    userInfoAt: function userInfoAt(args) {
        return {
            email: this._userListCellText({row: args.row, column: 'user.email'}),
            firstName: this._userListCellText({row: args.row, column: 'user.firstName'}),
            lastName: this._userListCellText({row: args.row, column: 'user.lastName'})
        }
    },

    _userListCellText: function _userListCellText(args) {
        return element(this._userListRepeater().row(args.row).column(args.column)).getText();
    },

    _userListRepeater: function _userListRepeater() {
        return by.repeater('user in userList');
    }

});
