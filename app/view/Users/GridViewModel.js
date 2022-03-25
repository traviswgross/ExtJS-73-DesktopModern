Ext.define('Everlast.view.Users.GridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.users.grid',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json',
        'Ext.data.field.Field'
    ],

    data: {
        formType: 'Create'
    },

    stores: {
        users: {
            autoLoad: true,
            proxy: {
                type: 'rest',
                url: '/api/users?token=50|fZXBxPhYMKCpGxhtBgUQl6CcAqyzM2IVE02m2ETL',
                headers: {
                    Authorization: 'Bearer 50|fZXBxPhYMKCpGxhtBgUQl6CcAqyzM2IVE02m2ETL'
                },
                withCredentials: true,
                reader: {
                    type: 'json'
                }
            },
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'username'
                },
                {
                    name: 'first_name'
                },
                {
                    name: 'last_name'
                },
                {
                    name: 'email'
                },
                {
                    name: 'is_admin'
                },
                {
                    name: 'is_agent'
                },
                {
                    name: 'is_team_lead'
                },
                {
                    name: 'is_tpv'
                },
                {
                    name: 'is_admin_tpv'
                }
            ]
        }
    }

});