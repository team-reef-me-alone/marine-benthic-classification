Plotly.d3.csv('https://raw.githubusercontent.com/team-reef-me-alone/marine-benthic-classification/plotlyPie/benthicclassification.csv', function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });

  }

  var codes = [{code: "u", type: "unconsolidated"}, {code: "m" , type: "mud"}, {code: "s", type: "sand"}, {code: "h", type: "hardbottom"}, {code: "rb", type: "rubble"}, {code: "b", type: "boulder"}, {code: "rk", type: "rock"}, {code: "mm", type: "man-made structure"}, {code: "uc", type: "unclassifed"}];

  console.log(codes);

  //data arrays for all zones
  var A = [];
  var B = [];
  var C = [];

  var xVals = unpack(codes, 'type');

  for (i = 0; i < rows.length; i++) {
    if (rows[i]['Zone'] == 'A') {
      A.push(rows[i]);
    } else if (rows[i]['Zone'] == 'B') {
      B.push(rows[i]);
    } else {
      C.push(rows[i]);
    };
  };

  function getData(lc, lcArray) {
    var num = 0;
    for (i = 0; i < lcArray.length; i++) {
      if (lc == lcArray[i]['Abiotic']) {
        num++;
      }
    }
    return num;
  }

  var zoneA= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, A)}),
    name: 'Zone A',
    marker: {
      color: '#20C1F0'
    },
    type: 'bar'

  };

  var zoneB= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, B)}),
    name: 'Zone B',
    marker: {
      color: '#EBDC23'
    },
    type: 'bar'

  };

  var zoneC= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, C)}),
    name: 'Zone C',
    marker: {
      color: '#EB0C4C'
    },
    type: 'bar'

  };

  var allData = [A,B,C]
  var allTraces = [zoneA,zoneB,zoneC]
  console.log(allData);

  function getColor(obj) {
    return obj.marker.color;
  }


  function makeTrace(obj, i) {
    return {
      x: ['zone A','zone B','zone C'],
      y: allData.map(function(x) {return getData(obj,x)}),
      marker: {color: allTraces.map(getColor)},
      type: 'bar',
      visible: false,
    };
  }

  var newTraces = unpack(codes,'code').map(makeTrace);

  var data = [zoneA,zoneB,zoneC].concat(newTraces);

  console.log(data);

  var myPlot = document.getElementById('substrateGraphs');

  var button_layer_1_height = 1.12
  var button_layer_2_height = 1.0
  var annotation_offset = 0.04

  var updatemenus=[
    {
      buttons: [
        {
          args: [{'visible': [true, true, true, false, false,false,false,false,false,false,false,false]}],
          label: 'All',
          method: 'update'
        },
        {
          args: [{'visible': [false,false,false,true,false,false,false,false,false,false,false,false]}, {'showlegend': false}],
          label: 'Unconsolidated',
          method: 'update'
        },
        {
          args: [{'visible': [false,false,false,false,true,false,false,false,false,false,false,false]}, {'showlegend': false}],
          label: 'Mud',
          method: 'update'
        },
        {
          args: [{'visible': [false,false,false,false,false,true,false,false,false,false,false,false]}, {'showlegend': false}],
          label: 'Sand',
          method: 'update'
        },
        {
          args: [{'visible': [false, false, false, false, false,false,true,false,false,false,false,false]}, {'showlegend': false}],
          label: 'Hardbottom',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,true,false,false,false,false]}, {'showlegend': false}],
          label: 'Rubble',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,true,false,false,false]}, {'showlegend': false}],
          label: 'Boulder',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,true,false,false]}, {'showlegend': false}],
          label: 'Rock',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,true,false]}, {'showlegend': false}],
          label: 'Man-made Structure',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,false,false,false,false,true]}, {'showlegend': false}],
          label: 'Unclassified',
          method: 'update'
        }
      ],
      direction: 'left',
      pad: {'r': 10, 't': 10},
      showactive: true,
      type: 'dropdown',
      direction: 'down',
      xanchor: 'left',
      y: 1.2,
      yanchor: 'top'
    },

  ]

  var layout = {
    barmode: 'group',
    updatemenus: updatemenus,
    showlegend: true,
    title: {
      text: 'Substrate by Zone'
    },
    xaxis: {title: 'Substrate Type'},
    yaxis: {title: 'Amount Present', rangemode: 'tozero'}
  };



  Plotly.newPlot('substrateGraphs', data, layout, {displayModeBar: false});

  /*
  only use if wanting to add annotations later
  myPlot.on('plotly_click', function(data){
    var pts = '';
    for(var i=0; i < data.points.length; i++){
      pts = 'x = '+data.points[i].x +'\ny = '+
          data.points[i].y.toPrecision(4) + '\n\n';
    }
    alert('Closest point clicked:\n\n'+pts);
  });
  */


});