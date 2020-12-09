trace1 = {
  meta: {
    columnNames: {
      labels: 'A',
      values: 'B',
      textposition: 'B'
    }
  },
  mode: 'markers',
  type: 'pie',
  textinfo: 'percent',
  labelssrc: 'kainyogi:59:396f2e',
  labels: ['seagrass', 'non-scleractinian coral', 'scleractinian coral', 'coralline algae', 'coral or coralline algae', 'macroalgae', 'turf algae', 'unclassified algae', 'emergent vegetation', 'Giant Clam', 'Other non-mobile inverts', 'None', 'unclassified'],
  valuessrc: 'kainyogi:59:d95fa8',
  values: ['0', '0', '0', '2', '0', '17', '92', '0', '0', '0', '0', '88', '0'],
  textposition: 'inside',
  texttemplate: '',
  insidetextorientation: 'radial'
};
data = [trace1];
layout = {
  title: { text: 'Ratio of Living Cover Found' },
  xaxis: {
    range: [-1, 6],
    autorange: true
  },
  yaxis: {
    range: [-1, 4],
    autorange: true
  },
  autosize: true,
  piecolorway: ['#0d0887', '#46039f', '#7201a8', '#9c179e', '#bd3786', '#d8576b', '#ed7953', '#fb9f3a', '#fdca26', '#f0f921']
};
Plotly.plot('plotly26', {
  data: data,
  layout: layout
});
