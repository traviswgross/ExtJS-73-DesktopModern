Ext.define('Everlast.view.Mobile.Recruitment.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.mobile.recruitment.form',

    requires: [
        'Everlast.view.Users.FormViewModel1',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Button'
    ],

    viewModel: {
        type: 'mobile.recruitment.form'
    },
    modal: true,
    title: 'Add Recruit',

    items: [
        {
            xtype: 'textfield',
            name: 'first_name',
            label: 'First Name',
            required: true
        },
        {
            xtype: 'textfield',
            name: 'last_name',
            label: 'Last Name',
            required: true
        },
        {
            xtype: 'textfield',
            name: 'email',
            label: 'Email',
            required: true,
            placeholder: 'xxxxx@everlastenergy.com'
        },
        {
            xtype: 'textfield',
            name: 'phone',
            label: 'Phone Number',
            validators: 'phone',
            inputMask: '(999) 999-9999',
            placeholder: '(xxx) xxx-xxxx'
        },
        {
            xtype: 'toolbar',
            ui: 'footer',
            docked: 'bottom',
            items: [
                {
                    xtype: 'button',
                    ui: 'action',
                    width: '100%',
                    iconCls: 'x-fa fa-check',
                    text: 'Recruit'
                }
            ]
        }
    ]

});