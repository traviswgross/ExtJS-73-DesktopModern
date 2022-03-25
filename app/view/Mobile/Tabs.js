Ext.define('Everlast.view.Mobile.Tabs', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mobile.tabs',

    requires: [
        'Everlast.view.Mobile.TabsViewModel',
        'Everlast.view.Mobile.Recruitment.Form',
        'Ext.tab.Bar',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.dataview.ListCollapser',
        'Ext.dataview.pullrefresh.PullRefresh',
        'Ext.form.Panel'
    ],

    viewModel: {
        type: 'mobile.tabs'
    },
    ui: 'mobileTabs',

    tabBar: {
        ui: 'mobileNav',
        docked: 'bottom'
    },
    items: [
        {
            xtype: 'list',
            title: 'My Recruits',
            iconCls: 'x-fa fa-users',
            itemTpl: [
                '<div>{first_name}</div>'
            ],
            bind: {
                store: '{users}'
            },
            items: [
                {
                    collapsed: true,
                    footer: true
                }
            ],
            plugins: [
                {
                    type: 'pullrefresh'
                }
            ]
        },
        {
            xtype: 'container',
            title: 'Profile',
            iconCls: 'x-fa fa-user'
        },
        {
            xtype: 'mobile.recruitment.form',
            header: true,
            iconCls: 'x-fa fa-plus',
            title: 'Recruit'
        }
    ]

});