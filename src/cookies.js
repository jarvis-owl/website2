
// other: https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript-only#35123097
//https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_geolocation


// src: https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
                         //seconds of a day | down to seconds again
    d.setTime(d.getTime() + (exdays*86400000*86400));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // return JSON.parse( c.substring(name.length, c.length) );
            console.log(c);
            return c.substring(name.length, c.length);
        }
    }
    console.log("[-] empty cookie");
    return "";
}

//count page visits
document.addEventListener('DOMContentLoaded', function() {

     if (!document.cookie.length){
       //very helpful src: https://github.com/js-cookie/js-cookie
      console.log("no cookie set");

     } else {
      console.log("Cookie found");
      var data = Cookies.getJSON('basic0x37');
      // console.log( data.time.format("dd/MM/yyyy hh:mm TT") );
      console.log(new Date().toString()  );
      console.log("cookie expires: ", new Date(data.time ).toString()  );
      console.log("Fingerprint: ",data.fingerprint);
      console.log("user agent: ",data.user_agent);
      //117c2bea312d8d68a0806afbfb904ba1

     }

   //send to server

}, false); //}addEventListener



var info={
    //src: https://stackoverflow.com/questions/8180296/what-information-can-we-access-from-the-client
    timeOpened:new Date(),
    timezone:(new Date()).getTimezoneOffset()/60,

    pageon(){return window.location.pathname},
    referrer(){return document.referrer},
    previousSites(){return history.length},

    browserName(){return navigator.appName},
    browserEngine(){return navigator.product},
    browserVersion1a(){return navigator.appVersion},
    browserVersion1b(){return navigator.userAgent},
    browserLanguage(){return navigator.language},
    browserOnline(){return navigator.onLine},
    browserPlatform(){return navigator.platform},
    javaEnabled(){return navigator.javaEnabled()},
    dataCookiesEnabled(){return navigator.cookieEnabled},
    dataCookies1(){return document.cookie},
    dataCookies2(){return decodeURIComponent(document.cookie.split(";"))},
    dataStorage(){return localStorage},

    sizeScreenW(){return screen.width},
    sizeScreenH(){return screen.height},
    sizeDocW(){return document.width},
    sizeDocH(){return document.height},
    sizeInW(){return innerWidth},
    sizeInH(){return innerHeight},
    sizeAvailW(){return screen.availWidth},
    sizeAvailH(){return screen.availHeight},
    scrColorDepth(){return screen.colorDepth},
    scrPixelDepth(){return screen.pixelDepth},


    latitude(){return position.coords.latitude},
    longitude(){return position.coords.longitude},
    accuracy(){return position.coords.accuracy},
    altitude(){return position.coords.altitude},
    altitudeAccuracy(){return position.coords.altitudeAccuracy},
    heading(){return position.coords.heading},
    speed(){return position.coords.speed},
    timestamp(){return position.timestamp},


    };
