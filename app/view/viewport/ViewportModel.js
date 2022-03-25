Ext.define('Everlast.view.viewport.ViewportModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.viewport',

    requires: [
        'Ext.app.bind.Formula'
    ],

    data: {
        baseUrl: Ext.manifest.baseURL,
        isAdmin: 0,
        isAgent: 0
    },

    formulas: {
        baseUrl: {
            get: function(data) {
                return Ext.manifest.baseURL;
            },
            bind: 'baseUrl'
        },
        userId: {
            get: function(data) {
                localStorage.getItem('userId');
            },
            bind: 'userId'
        },
        isAdmin: {
            get: function(data) {
                localStorage.getItem('admin');
            },
            bind: 'isAdmin'
        }
    }

});