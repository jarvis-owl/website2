
document.addEventListener('DOMContentLoaded', function() {      //wait for website to finish loading



    $("#test").hide()		//verify working JS


}, false); //}addEventListener



$(function() {
  var intervalMS = 5000;
      setInterval(function() {
        $("#actual_img").prop("src", "img/img.png?" + +new Date());


   }, intervalMS);
});


// toggle sidebar
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

// reload complete page for debugging purposes
$(function() {
   var intervalMS = 60000; //default 30s=300000 ; 28.09.'17 changed to 300s as also log interval in shellscript
   setInterval(function() {
      // location.reload();
 }, intervalMS);
});
