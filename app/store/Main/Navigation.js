Ext.define('Everlast.store.Main.Navigation', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Main.Navigation',
            root: {
                expanded: true,
                children: [
                    {
                        text: 'Dashboard',
                        iconCls: 'x-fa fa-desktop',
                        viewType: 'dashboardtab',
                        reference: 'dashboardTab',
                        routeId: 'portfolio',
                        leaf: true
                    },
                    {
                        text: 'Users',
                        iconCls: 'x-fa fa-user',
                        viewType: 'users.tab',
                        reference: 'usersTab',
                        routeId: 'users',
                        leaf: true
                    }
                ]
            },
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});