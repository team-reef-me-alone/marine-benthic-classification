//Make new trace where:
//seperate by zone
//look over living cover codes
//is that code in trace? if not, add (as a header)
//if it is, add to count
//Graphing:
//use headers as labels
//use count as value
Plotly.d3.csv('https://raw.githubusercontent.com/team-reef-me-alone/marine-benthic-classification/plotlyPie/benthicclassification.csv', function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });

  }

  var codes = [{code: "sg", cover: "seagrass"}, {code: "ns" , cover: "nonscleractinian coral"}, {code: "sc", cover: "scleractinian coral"}, {code: "ca", cover: "coralline algae"}, {code: "cc", cover: "coral"}, {code: "ma", cover: "macroalgae"}, {code: "ta", cover: "turf algae"}, {code: "ua", cover: "unclassfied algae"}, {code: "ev", cover: "emergent vegetation"}, {code: "gc", cover: "giant clam"}, {code: "nm", cover: "nonmobile inverts"}, {code: "no", cover: "none"}, {code: "uc", cover: "unclassified"}];

  console.log(codes);

  //data arrays for all zones
  var zoneA = [];
  var zoneB = [];
  var zoneC = [];

  for (i = 0; i < rows.length; i++) {
    if (rows[i]['Zone'] === 'A') {
      zoneA.push(rows[i]);
    } else if (rows[i]['Zone'] === 'B') {
      zoneB.push(rows[i]);
    } else {
      zoneC.push(rows[i]);
    }
  }

  function getData(lc, lcArray) {
    var num = 0;
    for (i = 0; i < lcArray.length; i++) {
      if (lc === lcArray[i]['Livingcover']) {
        num++;
      }
    }
    return num;
  }

  var traceA= {
    x: unpack(codes, 'cover'),
    y: unpack(codes, 'code').map(function(x) {return getData(x, zoneA)}),
    name: 'Zone A',
    type: 'bar'

  };

  var traceB= {
    x: unpack(codes, 'cover'),
    y: unpack(codes, 'code').map(function(x) {return getData(x, zoneB)}),
    name: 'Zone B',
    type: 'bar'

  };

  var traceC= {
    x: unpack(codes, 'cover'),
    y: unpack(codes, 'code').map(function(x) {return getData(x, zoneC)}),
    name: 'Zone C',
    type: 'bar'

  };

  var data = [traceA,traceB,traceC];
  console.log(data);

  var layout = {
    barmode: 'group'
  };

  Plotly.newPlot('barExample', data, layout);

});
