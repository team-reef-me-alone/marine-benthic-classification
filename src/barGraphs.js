Plotly.d3.csv('https://raw.githubusercontent.com/team-reef-me-alone/marine-benthic-classification/plotlyPie/benthicclassification.csv', function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });

  }

  var codes = [{code: "sg", cover: "seagrass"}, {code: "ns" , cover: "nonscleractinian coral"}, {code: "sc", cover: "scleractinian coral"}, {code: "ca", cover: "coralline algae"}, {code: "cc", cover: "coral"}, {code: "ma", cover: "macroalgae"}, {code: "ta", cover: "turf algae"}, {code: "ua", cover: "unclassfied algae"}, {code: "ev", cover: "emergent vegetation"}, {code: "gc", cover: "giant clam"}, {code: "nm", cover: "nonmobile inverts"}, {code: "no", cover: "none"}, {code: "uc", cover: "unclassified"}];

  console.log(codes);

  //data arrays for all zones
  var A = [];
  var B = [];
  var C = [];

  var xVals = unpack(codes, 'cover');

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
      if (lc == lcArray[i]['Livingcover']) {
        num++;
      }
    }
    return num;
  }

  var zoneA= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, A)}),
    name: 'Zone A',
    type: 'bar'

  };

  var zoneB= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, B)}),
    name: 'Zone B',
    type: 'bar'

  };

  var zoneC= {
    x: xVals,
    y: unpack(codes, 'code').map(function(x) {return getData(x, C)}),
    name: 'Zone C',
    type: 'bar'

  };

  var allData = [A,B,C]
  console.log(allData);

  function makeTrace(obj) {
    return {
      x: ['zone A','zone B','zone C'],
      y: allData.map(function(x) {return getData(obj,x)}),
      type: 'bar',
      visible: false,
    };
  }

  var newTraces = unpack(codes,'code').map(makeTrace);

  var data = [zoneA,zoneB,zoneC].concat(newTraces);

  console.log(data);

  var myPlot = document.getElementById('barExample');

  var button_layer_1_height = 1.12
  var button_layer_2_height = 1.0
  var annotation_offset = 0.04

  var updatemenus=[
    {
      buttons: [
        {
          args: [{'visible': [true, true, true, false, false,false,false,false,false,false,false,false,false,false,false,false]}],
          label: 'All',
          method: 'update'
        },
        {
          args: [{'visible': [false, false, false, true, false,false,false,false,false,false,false,false,false,false,false,false]}],
          label: 'Seagrass',
          method: 'update'
        },
        {
          args: [{'visible': [false, false, false, false, true,false,false,false,false,false,false,false,false,false,false,false]}],
          label: 'Nonscleractinian Coral',
          method: 'update'
        },
        {
          args: [{'visible': [false, false, false, false, false,true,false,false,false,false,false,false,false,false,false,false]}],
          label: 'Scleractinian Coral',
          method: 'update'
        },
        {
          args: [{'visible': [false, false, false, false, false,false,true,false,false,false,false,false,false,false,false,false]}],
          label: 'Coralline Algae',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,true,false,false,false,false,false,false,false,false]}],
          label: 'Coral',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,true,false,false,false,false,false,false,false]}],
          label: 'Macroalgae',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,true,false,false,false,false,false,false]}],
          label: 'Turf Algae',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,true,false,false,false,false,false]}],
          label: 'Unclassified Algae',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,true,false,false,false,false]}],
          label: 'Emergent Vegetation',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,false,true,false,false,false]}],
          label: 'Giant Clam',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,false,false,true,false,false]}],
          label: 'Nonmobile Inverts',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,false,false,false,true,false]}],
          label: 'None',
          method: 'update'
        },{
          args: [{'visible': [false, false, false, false, false,false,false,false,false,false,false,false,false,false,false,true]}],
          label: 'Unclassified',
          method: 'update'
        },
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
    title: {
      text: 'Living Cover by Zones'
    }
  };



  Plotly.newPlot('barExample', data, layout, {displayModeBar: false});


  myPlot.on('plotly_click', function(data){
    var pts = '';
    for(var i=0; i < data.points.length; i++){
      pts = 'x = '+data.points[i].x +'\ny = '+
          data.points[i].y.toPrecision(4) + '\n\n';
    }
    alert('Closest point clicked:\n\n'+pts);
  });

});