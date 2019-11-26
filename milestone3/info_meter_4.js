// Data - only 'start' value
var info_meter_4_data = [0, 0.71, 0.9];
// Data - 'max' value
var info_meter_4_maxvalue = 1;
// Data - 'arrow' value
var info_meter_4_arrowvalue = 0.65;

var distance = 20;

var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if(width <= 1075){
  distance = 5;
}

$(function () {

    $('#meter_4').highcharts({

        chart: {
            type: 'gauge',
            backgroundColor: '#404040',
            margin: [10, 10, 10, 10],
        },

        title: {
            text: null,
        },

        pane: {
            startAngle: -90,
            endAngle: 90,
            background: null,
            size: '100%',
        },
        credits: {
          enabled: false
        },
        exporting: {
         enabled: false
       },

       tooltip: {
         borderWidth: 0,
         backgroundColor: 'none',
         shadow: false,
         style: {
           fontSize: '0px'
         }
       },

        yAxis: {
          tickLength: 1,
          minorTickLength: 0,
          endOnTick: false,
          tickColor: 'rgba(0,0,0,0)',
          tickInterval: 0.1,
          labels: {
          distance: distance,
           style: {
              color: 'white',
              font: '20px Trebuchet MS, Verdana, sans-serif',
             }
          },
            min: 0,
            max: info_meter_4_maxvalue,

            title: {
                text: null
            },
            plotBands: [
              {
                from: 0,
                to: info_meter_4_data[1],
                color: '#C00000',
                thickness: 45,
            }, {
                from: info_meter_4_data[1],
                to: info_meter_4_data[2],
                color: '#FEFF00',
                thickness: 45,
            }, {
                from: info_meter_4_data[2],
                to: info_meter_4_maxvalue,
                color: '#538235',
                thickness: 45,
            }]
        },

        series: [{
            name: null,
            data: [info_meter_4_arrowvalue],
        }]

    },
  );
});
