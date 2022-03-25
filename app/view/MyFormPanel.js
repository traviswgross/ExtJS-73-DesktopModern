Ext.define('Everlast.view.MyFormPanel', {
    extend: 'Ext.form.Panel',
    alias: 'widget.myformpanel',

    requires: [
        'Everlast.view.MyFormPanelViewModel'
    ],

    viewModel: {
        type: 'myformpanel'
    },
    title: 'My Form'

});