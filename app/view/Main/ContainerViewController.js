Ext.define('Everlast.view.Main.ContainerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main.container',

    onNavigationSelectionChange: function(treelist, record, eOpts) {
        const mainContainer = this.lookupReference('contentPanel');
        let view = record.data.viewType;
        // console.dir(view);
        // console.dir(treelist);
        // console.dir(record);

        mainContainer.add(Ext.widget(view));
    },

    onContainerAdded: function(component, container, index, eOpts) {
        const token = localStorage.getItem('token');
        console.dir(token);

    }

});