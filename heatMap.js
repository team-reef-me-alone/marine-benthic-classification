Plotly.setPlotConfig({
  mapboxAccessToken: "pk.eyJ1IjoibGV2eWplYW4iLCJhIjoiY2tmZzRrdTBhMDF5eTJxcHAyc2oyeTUxbyJ9.4gtxzCh3vsajA99VB5fk7g"
});

Plotly.d3.csv('data/benthicclassification.csv',
    function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
    })}

      const data = [{
        lon: unpack(rows, 'Lon'),
        lat: unpack(rows, 'Lat'),
        radius: 30,
        z: unpack(rows, 'Diversity'),
        type: "densitymapbox",
        coloraxis: 'coloraxis'
      }]

      const layout = {
        mapbox: {
          center: { lon: -157.7614683913925, lat: 21.274110921130642 },
          style: "outdoors",
          zoom: 15
        },
        coloraxis: { colorscale: "Viridis" },
        title: { text: "Diversity Heatmap" }
      }

      Plotly.newPlot('plotly-heatMap', data, layout);
    });
