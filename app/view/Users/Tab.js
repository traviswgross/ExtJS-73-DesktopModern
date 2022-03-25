Ext.define('Everlast.view.Users.Tab', {
    extend: 'Ext.Container',
    alias: 'widget.users.tab',

    requires: [
        'Everlast.view.Users.TabViewModel',
        'Everlast.view.Users.Grid',
        'Ext.grid.Grid',
        'Ext.Toolbar',
        'Ext.field.ComboBox'
    ],

    viewModel: {
        type: 'users.tab'
    },
    reference: 'usersTab',
    padding: 20,
    scrollable: 'vertical',
    layout: 'vbox',

    items: [
        {
            xtype: 'users.grid',
            shadow: true,
            autoSize: true,
            layout: 'fit',
            flex: 1
        },
        {
            xtype: 'toolbar',
            reference: 'filterToolbar',
            ui: 'transparent',
            docked: 'top',
            items: [
                {
                    xtype: 'combobox',
                    shadow: true,
                    padding: '8 16',
                    placeholder: 'Filter Role'
                }
            ]
        }
    ]

});