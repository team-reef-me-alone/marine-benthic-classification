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
  labelssrc: 'kainyogi:73:ab758e',
  labels: ['unconsolidated', 'mud', 'sand', 'Hardbottom', 'rubble', 'boulder', 'rock', 'man-made'],
  valuessrc: 'kainyogi:73:7bc8d5',
  values: ['0', '5', '143', '0', '53', '0', '0', '0'],
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
  piecolorway: ['rgb(232, 245, 171)', 'rgb(220, 219, 137)', 'rgb(209, 193, 107)', 'rgb(199, 168, 83)', 'rgb(186, 143, 66)', 'rgb(170, 121, 60)', 'rgb(151, 103, 58)', 'rgb(129, 87, 56)', 'rgb(104, 72, 53)', 'rgb(80, 59, 46)', 'rgb(57, 45, 37)', 'rgb(34, 30, 27)']
};
Plotly.plot('plotly9', {
  data: data,
  layout: layout
});
