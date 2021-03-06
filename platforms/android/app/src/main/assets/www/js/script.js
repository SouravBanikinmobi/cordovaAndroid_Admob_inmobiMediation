load();

function load(){

initAd();

}

function showad(){

showInterstitialFunc();
}

function initAd(){
alert(0);
             if ( window.plugins && window.plugins.AdMob ) {
                 var ad_units = {
                     ios : {
                         banner: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx',		//PUT ADMOB ADCODE HERE
                         interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
                     },
                     android : {
                         banner: 'ca-app-pub-3940256099942544/6300978111',		//PUT ADMOB ADCODE HERE
                         interstitial: 'ca-app-pub-7599894810320338/3789146948'	//PUT ADMOB ADCODE HERE
                     }
                 };
                 var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

                 window.plugins.AdMob.setOptions( {
                     publisherId: admobid.banner,
                     interstitialAdId: admobid.interstitial,
                     adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
                     bannerAtTop: false, // set to true, to put banner at top
                     overlap: true, // banner will overlap webview
                     offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                     isTesting: false, // receiving test ad
                     autoShow: false // auto show interstitial ad when loaded
                 });

                 registerAdEvents();
                 window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown
                 window.plugins.AdMob.requestInterstitialAd();

             } else {
                 //alert( 'admob plugin not ready' );
             }
     }



          //functions to allow you to know when ads are shown, etc.
          function registerAdEvents() {
                  document.addEventListener('onReceiveAd', function(){
                  showBannerFunc();

                  });
                  document.addEventListener('onFailedToReceiveAd', function(data){});
                  document.addEventListener('onPresentAd', function(){});
                  document.addEventListener('onDismissAd', function(){ });
                  document.addEventListener('onLeaveToAd', function(){ });
                  document.addEventListener('onReceiveInterstitialAd', function(){
                    document.getElementById ("button").style.display="block";
                   });


                  document.addEventListener('onPresentInterstitialAd', function(){ });
                  document.addEventListener('onDismissInterstitialAd', function(){
                  	window.plugins.AdMob.createInterstitialView();			//REMOVE THESE 2 LINES IF USING AUTOSHOW
                      window.plugins.AdMob.requestInterstitialAd();			//get the next one ready only after the current one is closed
                  });
              }


                       function showBannerFunc(){
                           window.plugins.AdMob.createBannerView();
                       }
                       //display the interstitial
                       function showInterstitialFunc(){
                           window.plugins.AdMob.showInterstitialAd();
                       }