Ext.define('Everlast.view.Main.Container', {
    extend: 'Ext.Container',
    alias: 'widget.main.container',

    requires: [
        'Everlast.view.Main.ContainerViewModel',
        'Everlast.view.Main.ContainerViewController',
        'Ext.Toolbar',
        'Ext.Spacer',
        'Ext.Button',
        'Ext.list.Tree'
    ],

    controller: 'main.container',
    viewModel: {
        type: 'main.container'
    },
    scrollable: false,
    layout: 'hbox',

    items: [
        {
            xtype: 'toolbar',
            ui: 'main-header',
            docked: 'top',
            items: [
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    ui: 'round',
                    tooltip: 'Logout',
                    iconCls: 'x-fa fa-sign-out-alt'
                }
            ]
        },
        {
            xtype: 'treelist',
            reference: 'mainNav',
            itemId: 'mytreelist',
            shadow: true,
            ui: 'mainNav',
            expanderFirst: false,
            expanderOnly: false,
            micro: true,
            store: 'Main.Navigation',
            listeners: {
                selectionchange: 'onNavigationSelectionChange'
            }
        },
        {
            xtype: 'container',
            flex: 1,
            reference: 'contentPanel',
            minHeight: 768,
            scrollable: 'vertical',
            layout: {
                type: 'card',
                animation: 'slide'
            }
        }
    ],
    listeners: {
        added: 'onContainerAdded'
    }

});