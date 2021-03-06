var ctx = document.getElementById("myChart").getContext('2d');
var purple_orange_gradient = ctx.createLinearGradient(0, 0, 0, 280 );
purple_orange_gradient.addColorStop(0, 'rgba(89, 205, 244, 0.4)');
purple_orange_gradient.addColorStop(0.5, 'rgba(89, 205, 244, 0.3)');
purple_orange_gradient.addColorStop(0.8, 'rgba(89, 205, 244, 0.2)');
purple_orange_gradient.addColorStop(0.9, 'rgba(89, 205, 244, 0.1)');
purple_orange_gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["July 1", " ", "July 2", " ", "July 3", " ", "July 4", " ", "July 5"," ",  "July 6"],
        datasets: [{
            data: [1500, 1800, 1200, 2400, 2300, 4100, 2600, 2750, 1400, 1800, 1500],
            backgroundColor: purple_orange_gradient,
            borderColor: [
                '#13a89e'
            ],
            pointRadius:0,
            borderWidth: 2,
            hoverBorderWidth: 2,
            hoverBorderColor: '#59cdf4',
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: '#59CDF4 transparent'
        }]
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return tooltipItem.yLabel;
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                },
                gridLines: {
                    color: "#181819"
                }
            }]
        }
    }
});
$('.social-networks').on('click', function(e){
    e.preventDefault();
    $('.social-tab').css('display','none');
    $('.advertising-tab').css('display','block');

});
$('.advertising').on('click', function(e){
    e.preventDefault();
    $('.social-tab').css('display','flex');
    $('.advertising-tab').css('display','none');

});
