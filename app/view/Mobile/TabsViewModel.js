Ext.define('Everlast.view.Mobile.TabsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mobile.tabs',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],

    stores: {
        users: {
            groupField: 'recruit_status',
            autoLoad: true,
            model: 'Everlast.model.User',
            fields: [
                {
                    calculate: function(data) {

                        if(!data.email_verified_at)
                        return 'Email Not Verified';
                        if(data.email_verified_at && !data.is_agent)
                        return 'Processing';
                        if(data.is_active && data.is_agent)
                        return 'Active';
                    },
                    convert: function(v, rec) {
                        if(!v)
                        return false;
                    },
                    name: 'recruit_status'
                },
                {
                    type: 'date',
                    name: 'email_verified_at'
                },
                {
                    name: 'is_active'
                },
                {
                    name: 'is_agent'
                }
            ],
            proxy: {
                type: 'rest',
                url: '/api/users',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }

});