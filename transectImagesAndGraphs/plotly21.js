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
  labelssrc: 'kainyogi:85:4b1eb1',
  labels: ['unconsolidated', 'mud', 'sand', 'Hardbottom', 'rubble', 'boulder', 'rock', 'man-made'],
  valuessrc: 'kainyogi:85:888d37',
  values: ['0', '0', '175', '0', '26', '0', '0', '0'],
  textposition: 'inside',
  texttemplate: '',
  insidetextorientation: 'radial'
};
data = [trace1];
layout = {
  title: { text: 'Ratio of Substrate Found' },
  xaxis: {
    range: [-1, 6],
    autorange: true
  },
  yaxis: {
    range: [-1, 4],
    autorange: true
  },
  autosize: true,
  piecolorway: ['rgb(232, 245, 171)', 'rgb(220, 219, 137)', 'rgb(209, 193, 107)', 'rgb(199, 168, 83)', 'rgb(186, 143, 66)', 'rgb(170, 121, 60)', 'rgb(151, 103, 58)', 'rgb(129, 87, 56)', 'rgb(104, 72, 53)', 'rgb(80, 59, 46)', 'rgb(57, 45, 37)', 'rgb(34, 30, 27)']
};
Plotly.plot('plotly21', {
  data: data,
  layout: layout
});
