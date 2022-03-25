Ext.define('Everlast.view.Users.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users.grid',

    onButtonTap: function(button, e, eOpts) {
        var w = Ext.widget('users.form');

        this.getView().add(w);
        w.show();
    }

});