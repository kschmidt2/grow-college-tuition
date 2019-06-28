// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);

// console.log(Highcharts);


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1eM4oCpHRWZ5NJi2oCqpXyK2CsBJtWOOSpfgc-oSceoI',
            googleSpreadsheetWorksheet: 1,
            endColumn: 1
        },
        legend: {
            enabled: false
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 25000
        },
        xAxis: {
            tickInterval: 10
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function () {
                return '<b>' + this.x + ':</b> $' + Math.round(this.y).toLocaleString();
            }
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        },
        series: [{

        }]
    });
});