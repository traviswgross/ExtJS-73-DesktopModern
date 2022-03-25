Ext.define('Everlast.view.Users.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.users.grid',

    requires: [
        'Everlast.view.Users.GridViewModel',
        'Everlast.view.Users.GridViewController',
        'Ext.grid.column.Column',
        'Ext.grid.cell.Boolean',
        'Ext.TitleBar',
        'Ext.Button'
    ],

    controller: 'users.grid',
    viewModel: {
        type: 'users.grid'
    },
    name: 'Users.Grid',
    layout: 'fit',

    bind: {
        store: '{users}'
    },
    columns: [
        {
            xtype: 'gridcolumn',
            shadow: true,
            dataIndex: 'first_name',
            text: 'First Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'last_name',
            text: 'Last Name'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'email',
            text: 'Email'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'is_admin',
            text: 'Admin',
            cell: {
                xtype: 'booleancell'
            }
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'isAgent',
            text: 'Agent'
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'is_tpv',
            text: 'TPV'
        }
    ],
    items: [
        {
            xtype: 'titlebar',
            docked: 'top',
            title: 'Users',
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    reference: 'createUser',
                    ui: 'round alt',
                    tooltip: 'Create User',
                    iconCls: 'x-fa fa-plus',
                    listeners: {
                        tap: 'onButtonTap'
                    }
                }
            ]
        }
    ]

});