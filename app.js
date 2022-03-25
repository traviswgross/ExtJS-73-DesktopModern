Ext.Loader.setConfig({

});


Ext.application({
    viewport: {
        setHeaders: function(token) {
            Ext.toast('SHOW HEADERS',3000);

            Ext.Ajax.setDefaultXhrHeader({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
        },
        controller: 'viewport',
        viewModel: 'viewport',
        height: '100%',
        xclass: 'Ext.viewport.Viewport'
    },

    models: [
        'User'
    ],
    stores: [
        'Main.Navigation'
    ],
    views: [
        'viewport.Viewport'
    ],
    controllers: [
        'MyController'
    ],
    name: 'Everlast',

    launch: function() {
        const viewport = Ext.Viewport;
        let desktopView = Ext.widget('main.container'),
            mobileView = Ext.widget('mobile.tabs'),
            loginForm = Ext.widget('login.form');



        const device = Ext.os.deviceType == 'Desktop'? desktopView : view = mobileView;

        var url_string = window.location.href; //window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.get("token");
        if(c){
            setHeaders(c);
        }


        Ext.Ajax.request({
            url:'/api/me',
            success: function(response,msg){
                console.log('response success');
                console.dir(Ext.Viewport.getViewModel().data);
                viewport.add(device);
            },
            failure: function(response,msg){

                console.dir(Ext.Viewport.getViewModel().data);
                viewport.add(loginForm.show());

            }
        });


    }

});
