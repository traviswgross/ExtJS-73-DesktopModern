Ext.define('Everlast.view.Login.FormViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login.form',

    onLoginClick: function(button, e, eOpts) {
        const me = this,
        form = this.getView(),
        values = form.getValues();
        // console.dir(this.getView().id);

        form.mask('Loading...');


        // form.submit({

        //      success: function(data){
        //     console.dir(data);
        //         var obj = JSON.parse(data.responseText);
        //         localStorage.setItem("token", obj.access_token);
        //         localStorage.setItem('userId',obj.user.id);
        //         localStorage.setItem('isAdmin',obj.user.is_admin);
        //         //                 localStorage.setItem(user,obj.user);
        //         //                 localStorage.setItem('user',obj.user);
        //         //                 Ext.widget('main.panel');
        //         form.close();
        //         Ext.Viewport.add(Ext.widget('main.container'));
        //         form.unmask(false);
        //     },
        //     failure: function(data){
        //         //
        //         console.dir(data);
        //         localStorage.removeItem('access_token');
        //         localStorage.removeItem('user');
        //         //                 me.clearToken();
        //         form.unmask(false);
        //         Ext.Msg.alert('Error', 'Username or Password not valid!');
        //     }
        // });

        Ext.Ajax.request({
            withCredentials: true,
            //     setUsername: values.email,
            //     setPassword: values.password,
            // //     url: Ext.manifest.baseURL + '/api/auth/login',
            url: '/api/login',
            success: function(data){
                var obj = JSON.parse(data.responseText);
                //         localStorage.setItem("token", obj.access_token);
                localStorage.setItem('userId',obj.user.id);
                localStorage.setItem('isAdmin',obj.user.is_admin);

                form.close();
                Ext.Viewport.add(Ext.widget('main.container'));
                form.unmask(false);
            },
            failure: function(){
                //
                localStorage.clear();
                //         localStorage.removeItem('access_token');
                //         localStorage.removeItem('user');

                form.unmask(false);
                Ext.Msg.alert('Error', 'Username or Password not valid!');
            },
            params: values
        });
        //         action.responseText()

        //         switch (action.failureType) {
        //             case Ext.form.action.Action.CLIENT_INVALID:
        //                 Ext.Msg.alert(
        //                     'Failure',
        //                     'Form fields may not be submitted with invalid values'
        //                 );
        //                 break;
        //             case Ext.form.action.Action.CONNECT_FAILURE:
        //                 Ext.Msg.alert('Failure', 'Ajax communication failed');
        //                 break;
        //             case Ext.form.action.Action.SERVER_INVALID:
        //                Ext.Msg.alert('Failure', action.result.msg);
        //        }
        //     }
        // });
    }

});