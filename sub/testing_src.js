// toggle sidebar
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    $(document).ready(function(){

        $('button').click(function() {
            $.get('/Tcore.log',function(data, status){
            	let lines = data.split("\n");
                var x = [];
                var y = [];
            	for (let i = lines.length-11; i < lines.length-1;i++){
            		line = JSON.parse(lines[i]) ;
                    x.push(line['unix']);
                    y.push(line['temp']);
            	}
            	console.warn(JSON.parse(lines[0]));
                console.log(x);
                console.log(y);
            })
        });
    });

    document.getElementById("text").innerHTML = "JS works";

});


// reload complete page for debugging purposes
$(function() {
   var intervalMS = 120000; //default 30s=300000 ; 28.09.'17 changed to 300s as also log interval in shellscript
   setInterval(function() {
      location.reload();
 }, intervalMS);
});
