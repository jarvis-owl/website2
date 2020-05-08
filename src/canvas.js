update_canvas(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],[15339, 21345, 18483, 24003, 23489, 24092, 12034])


function update_canvas(x,y){
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
        }
      }
    });

}


$(function() {
   var intervalMS = 5000;
   setInterval(function() {

           $.get('/Tcore.log',function(data, status){
            let lines = data.split("\n");
               var x = [];
               var y = [];
            for (let i = lines.length-11; i < lines.length-1;i++){
                line = JSON.parse(lines[i]) ;
                   x.push(line['unix']);
                   y.push(line['temp']);
            }
            update_canvas(x,y);
           })


 }, intervalMS);
});
