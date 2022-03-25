Ext.define('Everlast.view.Users.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.users.form',

    requires: [
        'Everlast.view.Users.FormViewModel',
        'Everlast.view.Users.FormViewController',
        'Ext.field.Text',
        'Ext.field.CheckboxGroup',
        'Ext.field.Checkbox'
    ],

    controller: 'users.form',
    viewModel: {
        type: 'users.form'
    },
    closable: true,

    bind: {
        title: '{formType} User'
    },
    items: [
        {
            xtype: 'containerfield',
            defaults: {
                width: '40%',
                padding: '0 4'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'first_name',
                    width: '46%',
                    label: 'First',
                    required: true
                },
                {
                    xtype: 'textfield',
                    name: 'last_name',
                    width: '46%',
                    label: 'Last',
                    required: true
                }
            ]
        },
        {
            xtype: 'textfield',
            name: 'email',
            label: 'Field',
            labelAlign: 'email',
            required: true
        },
        {
            xtype: 'checkboxgroup',
            label: 'Label',
            required: true,
            items: [
                {
                    xtype: 'checkbox',
                    name: 'is_admin',
                    label: 'Box Label'
                },
                {
                    xtype: 'checkbox',
                    name: 'is_agent',
                    label: 'Box Label'
                }
            ]
        },
        {
            xtype: 'textfield',
            name: 'phone',
            label: 'Phone#',
            validators: 'phone',
            inputMask: '(999) 999-9999',
            placeholder: '(xxx) xxx-xxxx'
        }
    ]

});