/**
 *
 * (c) 2013-2015 Wishtack
 *
 * $Id: $
 */

var dejavu = require('dejavu');

module.exports = dejavu.Class.declare({

    $name: 'PageBase',

    pageRootUrl: function pageRootUrl() {

        var url = 'http://' + process.env.FQDN;

        if (process.env.PORT) {
            url += ':' + process.env.PORT;
        }

        return url;

    }

});
