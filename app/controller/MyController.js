Ext.define('Everlast.controller.MyController', {
    extend: 'Ext.app.Controller',

    control: {
        "container": {
            show: 'onViewportLoad'
        }
    },

    onViewportLoad: function(component, eOpts) {
        var me = this;

        // Ext.util.Observable.observe(Ext.data.Connection, {
        //   requestexception: function(conn, response, options) { console.dir(response.statusText);
        //     if (response && (response.status === 401 && response.statusText === "Unauthorized")) {
        //       refreshToken(function() {
        //         //success callback
        //         conn.request(options);
        //       }, function() {
        //         //failure callback
        // //         MyLoginService.logout();
        //           localStorage.clear();
        //           conn.request(options);
        //       });
        //     }
        //   },
        // }, this);
    },

    refreshToken: function() {
        // Ext.Ajax.request({
        //     url: {baseUrl}+ 'api/auth/refresh',
        //     method: 'POST',
        //     cors: true,
        //     useDefaultXhrHeader : false,
        //     params: form.getValues(),
        //     success: function () {
        //         alert('success');
        //     },
        //     failure: function () {
        //         alert('failure');
        //     }
        // });
    }

});