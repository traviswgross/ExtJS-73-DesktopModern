Ext.define('Everlast.model.User', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.Date',
        'Ext.data.proxy.Rest',
        'Ext.data.reader.Json'
    ],


    fields: [
        {
            name: 'id'
        },
        {
            name: 'uuid'
        },
        {
            name: 'name'
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
            type: 'date',
            name: 'email_verified_at'
        },
        {
            name: 'recruiter_id'
        },
        {
            name: 'is_admin'
        },
        {
            name: 'is_agent'
        },
        {
            name: 'is_active'
        }
    ],
    proxy: {
        type: 'rest',
        url: '/api/users',
        paramsAsJson: true,
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});