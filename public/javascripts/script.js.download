//var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var config = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March'],
                datasets: [{
                    label: 'LPG Concentration',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: 'Temperature',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 255)',
                    borderColor: 'rgb(255, 99, 255)',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'LPG Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };
        window.onload = function() {
            var ctx = document.getElementById('canvas').getContext('2d');
            window.myLine = new Chart(ctx, config);
            hook();
        };
        // document.getElementById('randomizeData').addEventListener('click', function() {
        //     config.data.datasets.forEach(function(dataset) {
        //         dataset.data = dataset.data.map(function() {
        //             return randomScalingFactor();
        //         });
        //     });
        //     window.myLine.update();
        // });
        // var colorNames = Object.keys(window.chartColors);
        // document.getElementById('addDataset').addEventListener('click', function() {
        //     var colorName = colorNames[config.data.datasets.length % colorNames.length];
        //     var newColor = window.chartColors[colorName];
        //     var newDataset = {
        //         label: 'Dataset ' + config.data.datasets.length,
        //         backgroundColor: newColor,
        //         borderColor: newColor,
        //         data: [],
        //         fill: false
        //     };
        //     for (var index = 0; index < config.data.labels.length; ++index) {
        //         newDataset.data.push(randomScalingFactor());
        //     }
        //     config.data.datasets.push(newDataset);
        //     window.myLine.update();
        // });
        // document.getElementById('addData').addEventListener('click', function() {
        //     if (config.data.datasets.length > 0) {
        //         var month = MONTHS[config.data.labels.length % MONTHS.length];
        //         config.data.labels.push(month);
        //         config.data.datasets.forEach(function(dataset) {
        //             dataset.data.push(randomScalingFactor());
        //         });
        //         window.myLine.update();
        //     }
        // });
        // document.getElementById('removeDataset').addEventListener('click', function() {
        //     config.data.datasets.splice(0, 1);
        //     window.myLine.update();
        // });
        // document.getElementById('removeData').addEventListener('click', function() {
        //     config.data.labels.splice(-1, 1); // remove the label first
        //     config.data.datasets.forEach(function(dataset) {
        //         dataset.data.pop();
        //     });
        //     window.myLine.update();
        // });


        function randomScalingFactor() {
            return Math.floor((Math.random() * 50));
        }


        //***********************

                var line_config = {
            type: 'line',
            data: {
                labels: ['11.00 AM', '11.30 AM', '12.00 AM','12.30 AM','1.00 PM','11.00 AM', '11.30 AM', '12.00 AM','12.30 AM','1.00 PM'],
                datasets: [{
                    label: 'LPG Concentration',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: 'Temperature',
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 255)',
                    borderColor: 'rgb(255, 99, 255)',
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    text: 'LPG Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };

        function hook() {
            var line_ctx = document.getElementById('canvas-2').getContext('2d');
            window.myLine = new Chart(line_ctx, line_config);
        }
        // document.getElementById('randomizeData').addEventListener('click', function() {
        //     config.data.datasets.forEach(function(dataset) {
        //         dataset.data = dataset.data.map(function() {
        //             return randomScalingFactor();
        //         });
        //     });
        //     window.myLine.update();
        // });
        // var colorNames = Object.keys(window.chartColors);
        // document.getElementById('addDataset').addEventListener('click', function() {
        //     var colorName = colorNames[config.data.datasets.length % colorNames.length];
        //     var newColor = window.chartColors[colorName];
        //     var newDataset = {
        //         label: 'Dataset ' + config.data.datasets.length,
        //         backgroundColor: newColor,
        //         borderColor: newColor,
        //         data: [],
        //         fill: false
        //     };
        //     for (var index = 0; index < config.data.labels.length; ++index) {
        //         newDataset.data.push(randomScalingFactor());
        //     }
        //     config.data.datasets.push(newDataset);
        //     window.myLine.update();
        // });
        // document.getElementById('addData').addEventListener('click', function() {
        //     if (config.data.datasets.length > 0) {
        //         var month = MONTHS[config.data.labels.length % MONTHS.length];
        //         config.data.labels.push(month);
        //         config.data.datasets.forEach(function(dataset) {
        //             dataset.data.push(randomScalingFactor());
        //         });
        //         window.myLine.update();
        //     }
        // });
        // document.getElementById('removeDataset').addEventListener('click', function() {
        //     config.data.datasets.splice(0, 1);
        //     window.myLine.update();
        // });
        // document.getElementById('removeData').addEventListener('click', function() {
        //     config.data.labels.splice(-1, 1); // remove the label first
        //     config.data.datasets.forEach(function(dataset) {
        //         dataset.data.pop();
        //     });
        //     window.myLine.update();
        // });