// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function($ionicPlatform, RequestsService) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }


      FCMPlugin.onTokenRefresh(function(token){
        alert( token );
        console.log(token);
      });

      FCMPlugin.getToken(function(token){
        alert(token);
        console.log(token);
      });

      FCMPlugin.onNotification(function(data){
        if(data.wasTapped){
          //Notification was received on device tray and tapped by the user.
          alert( JSON.stringify(data) );
        }else{
          //Notification was received in foreground. Maybe the user needs to be notified.
          alert( JSON.stringify(data) );
        }
      });

      // pushNotification = window.plugins.pushNotification;

      // iOS
      // window.onNotificationAPN = function(e){
      //   if ( e.event.alert )
      //   {
      //     navigator.notification.alert(e.event.alert);
      //   }
      //
      //   if ( e.event.sound )
      //   {
      //     var snd = new Media(e.event.sound);
      //     snd.play();
      //   }
      //
      //   if ( e.event.badge )
      //   {
      //     pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, e.event.badge);
      //   }
      // };

      /*window.onNotification = function(e){

        switch(e.event){
          case 'registered':
            if(e.regid.length > 0){

              var device_token = e.regid;
              RequestsService.register(device_token).then(function(response){
                alert('registered!');
              });
            }
            break;

          case 'message':
            alert('msg received: ' + e.message);
            /!*
             {
             "message": "Hello this is a push notification",
             "payload": {
             "message": "Hello this is a push notification",
             "sound": "notification",
             "title": "New Message",
             "from": "813xxxxxxx",
             "collapse_key": "do_not_collapse",
             "foreground": true,
             "event": "message"
             }
             }
             *!/
            break;

          case 'error':
            alert('error occured');
            break;

        }
      };


      window.errorHandler = function(error){
        alert('an error occured');
      }


      pushNotification.register(
        onNotification,
        errorHandler,
        {
          'badge': 'true',
          'sound': 'true',
          'alert': 'true',
          'senderID': '408641708792',
          'ecb': 'onNotification'
        }
      );*/


    });
  })
