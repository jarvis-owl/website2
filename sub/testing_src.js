// toggle sidebar
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $(document).ready(function(){

        $('button').click(function() {
            $.get('/file.txt',function(data, status){
                if (status){
                    $('#text').html(data);
                }
            })
        });
    });

    document.getElementById("text").innerHTML = "JS works";

});


// reload complete page for debugging purposes
$(function() {
   var intervalMS = 60000; //default 30s=300000 ; 28.09.'17 changed to 300s as also log interval in shellscript
   setInterval(function() {
      location.reload();
 }, intervalMS);
});
