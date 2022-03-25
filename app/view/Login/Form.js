Ext.define('Everlast.view.Login.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login.form',

    requires: [
        'Everlast.view.Login.FormViewModel',
        'Everlast.view.Login.FormViewController',
        'Ext.field.Text',
        'Ext.Toolbar',
        'Ext.Spacer',
        'Ext.Button'
    ],

    controller: 'login.form',
    viewModel: {
        type: 'login.form'
    },
    reference: 'loginForm',
    floated: true,
    height: 375,
    shadow: true,
    width: 350,
    centered: true,
    html: '<img width="300" src="resources/images/everlast-logo.png">',
    maxWidth: 350,
    header: false,
    title: 'My Form',
    url: '/api/login',

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'textfield',
            name: 'email',
            width: 300,
            margin: '10 0 0',
            modelValidation: true,
            label: 'Email',
            required: true,
            validators: 'email',
            inputType: 'email'
        },
        {
            xtype: 'textfield',
            name: 'password',
            width: 300,
            label: 'Password',
            required: true,
            inputType: 'password'
        },
        {
            xtype: 'toolbar',
            ui: 'footer',
            docked: 'bottom',
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    reference: 'loginButton',
                    text: 'Login',
                    listeners: {
                        release: 'onLoginClick'
                    }
                }
            ]
        }
    ]

});