update_canvas();
const hist_len = 40;

function set_canvas(x,y){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: x,
        datasets: [{
            data: y,
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 2,
            pointBackgroundColor: '#007bff'
          }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        legend: {
          display: false,
      },
      animation: false
    }

    });

}


function update_canvas(){
    $.get('/Tcore.log',function(data, status){
     let lines = data.split("\n");
        var x = [];
        var y = [];
     for (let i = lines.length-hist_len-1; i < lines.length-1;i++){
         line = JSON.parse(lines[i]) ;
            x.push(unix2time(line['unix']) );
            y.push(line['temp']);
     }
     set_canvas(x,y);
     show_avg(y);
    })
}



$(function() {
   const intervalMS = 10000;

   setInterval(function() {

       update_canvas();

 }, intervalMS);
});

function unix2time (unix = 1549202402){
    let date = new Date(unix);
    var formattedTime = date.getHours() + ':' + ( '0'+String(date.getMinutes() )).substr(-2) + ':' + ('0'+String(date.getSeconds() )).substr(-2)
    // console.log( formattedTime);
    return formattedTime

}

function show_avg(data){

    let res = 0;
    for(let i = 0; i < data.length; i++){
        res += data[i];
    }
    document.getElementById("t_avg").innerHTML = 'Temperature Average: '+String(res/data.length).substr(0,6)+' °C';

}
