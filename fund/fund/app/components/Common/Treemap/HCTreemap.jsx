import React from 'react'
import ReactHighcharts from 'react-highcharts'

import heatmap from 'highcharts/modules/heatmap'
import treemap from 'highcharts/modules/treemap'

heatmap(ReactHighcharts.Highcharts)
treemap(ReactHighcharts.Highcharts)

const options = {
  colorAxis: {
    minColor: '#FFFFFF',
    maxColor: ReactHighcharts.Highcharts.getOptions().colors[0],
  },
  series: [{
    type: 'treemap',
    layoutAlgorithm: 'squarified',
    data: [{
      name: 'A',
      value: 6,
      colorValue: 1,
      color: '#ff7473',
    }, {
      name: 'B',
      value: 6,
      colorValue: 2,
    }, {
      name: 'C',
      value: 4,
      colorValue: 3,
    }, {
      name: 'D',
      value: 3,
      colorValue: 4,
    }, {
      name: 'E',
      value: 2,
      colorValue: 5,
    }, {
      name: 'F',
      value: 2,
      colorValue: 6,
    }, {
      name: 'G',
      value: 1,
      colorValue: 7,
    }],
  }],
  title: {
    text: '',
  },
}

const config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4],
  }],
}

class HCTreemap extends React.Component {
  render() {
    return (
      <ReactHighcharts config={options} />
    )
  }
}

export default HCTreemap
