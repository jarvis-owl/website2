var array = [["A1","B1","C1"],
             ["A2","B2","C2"],
             ["A3","B3","C3"],
             ["A4","B4","C4"],
             ["A5","B5","C5"]],
    table = document.getElementById("table2");

// Method 2 table 2
//src: http://1bestcsharp.blogspot.com/2017/03/javascript-populate-html-table-from-array.html

for(var i = 0; i < array.length; i++)
{
   // create a new row
   var newRow = table.insertRow(table.length);
   for(var j = 0; j < array[i].length; j++)
   {
       // create a new cell
       var cell = newRow.insertCell(j);

       // add value to the cell
       cell.innerHTML = array[i][j];
   }
}
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


//fill table 1
// for(var i = 0; i < Object.keys(info).length; i++)
// {
//    // create a new row
//    var newRow = table.insertRow(table.length);
//    for(var j = 0; j < array[i].length; j++)
//    {
//        // create a new cell
//        var cell = newRow.insertCell(j);
//
//        // add value to the cell
//        cell.innerHTML = array[i][j];
//    }
// }

var p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};

for (var key in p) {
    //src: https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}

document.getElementById("text").innerHTML = "Hello Dolly.";
