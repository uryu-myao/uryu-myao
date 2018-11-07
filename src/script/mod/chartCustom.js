/*
 *  *** Chart ***
 *
 *  - top page and works details
 */


(function() {

    // Work 01
    if (document.getElementById("chart01")) {

    let ctx01 = document.getElementById("chart01").getContext('2d');
    let gradientStroke = ctx01.createLinearGradient(0, 0, 100, 100);

    gradientStroke.addColorStop(.5, "#303595");
    gradientStroke.addColorStop(1, "#D14836");

    let cht01 = new Chart( ctx01, {
        type: 'line',
        data: {
            labels : ["Sept","Oct","Nov","Dec","Jan","Feb"],
            datasets: [{
                data: [1.5, 5, 3, 4, 3, 5],
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
    })
    };

    // Work 02
    if (document.getElementById("chart02")) {

    let ctx02 = document.getElementById("chart02").getContext('2d');
    let gradientStroke = ctx02.createLinearGradient(0, 0, 100, 100);

    gradientStroke.addColorStop(.5, "#303595");
    gradientStroke.addColorStop(1, "#D14836");

    let cht02 = new Chart( ctx02, {
        type: 'line',
        data: {
            labels : ["Oct","Nov","Dec","Jan","Feb","Mar","Apr"],
            datasets: [{
                data: [0.5, 1, 0.5, 1, 1, 2, 2, 1.75],
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
    })
    };
    
    // Work 03
    if (document.getElementById("chart03")) {

    let ctx03 = document.getElementById("chart03").getContext('2d');
    let gradientStroke = ctx03.createLinearGradient(0, 0, 100, 100);

    gradientStroke.addColorStop(.5, "#303595");
    gradientStroke.addColorStop(1, "#D14836");

    let cht03 = new Chart( ctx03, {
        type: 'line',
        data: {
            labels : ["Feb","Mar","Apr","May","Jun"],
            datasets: [{
                data: [0.6, 4.5, 0.1, 0, 3.4],
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
    })
    }

}());
