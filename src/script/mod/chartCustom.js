/*
    *** Chart ***

    - top page and works details

*/


(function() {

    if ( document.getElementById("chart") ) {

    let ctx = document.getElementById("chart").getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 0, 100, 100);

    gradientStroke.addColorStop(.5, "#303595");
    gradientStroke.addColorStop(1, "#D14836");

    let cht = new Chart( ctx, {

        type: 'line',
        data: {
            labels : ["Jan","Feb","Mar","Apr","May","Jun"],
            datasets: [{
                data: [4, 5, 5, 7, 2, 1],
                label: false,
                point: false,
                fillColor : "red",
                strokeColor : "white",
                pointBorderWidth : 0,
                pointRadius: 0,
                backgroundColor: '#030918',
                borderColor: gradientStroke,
                borderWidth: 1,
                pointStrokeColor : "transparent",
            }]
        },
        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        min: 0,
                        max: 8,
                        fontSize: 12,
                        stepSize: 10,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontSize: 12,
                    }
                }]
            },
            legend: {
                display: false
            },
            chartArea: {
                backgroundColor: 'rgba(26, 38, 133, 0.12)'
            }
        }
    });

    }
}());
