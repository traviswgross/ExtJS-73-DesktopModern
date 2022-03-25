Ext.define('Everlast.view.viewport.Viewport', {
    extend: 'Ext.Container',
    alias: 'widget.viewport.viewport',

    requires: [
        'Everlast.view.viewport.ViewportModel'
    ],

    viewModel: {
        type: 'viewport'
    }

});