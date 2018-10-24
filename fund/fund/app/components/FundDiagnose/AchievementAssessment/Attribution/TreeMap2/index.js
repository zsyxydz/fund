import React, { Component } from 'react'
import PropTypes from 'prop-types';
import _ from 'lodash'
import echarts from 'echarts/lib/echarts';
import { getDevicePixelRatio } from '../../../../../utils/util'
const dpr = getDevicePixelRatio()



class Treemap2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartsState: true,
    }
    this.charts = this.charts.bind(this)
  }
  componentDidMount() {
    const { chartsState } = this.state
    // console.log(chartsState)
    const { call } = this.props
    call(chartsState)
    this.charts()
  }

  componentDidUpdate() {
    const { chartsState } = this.state
    // console.log(chartsState)
    const { call } = this.props
    call(chartsState)
  }

  charts() {
    const { data, name } = this.props
    const { chartsState } = this.state
    // console.log('~~~~~', data)
    let father = []
    let childPositiveValue = []
    let childNegativeValue = []
    let Psum = []
    let Nsum = []
    let st = data.child
    for (let j in st) {
      if (j !== 'value')
        st[j] > 0 ? Psum.push(parseFloat(st[j].toFixed(2))) : Nsum.push(parseFloat(st[j].toFixed(2)))

      st[j] > 0 ? childPositiveValue.push(
        {
          name: j,
          value: Math.abs(st[j].toFixed(2)),
          label: {
            normal: {
              color: '#333',
              textStyle: {
                color: '#33517a',
              },
              formatter: function (data) {
                return '{gray|' + data.name + '}\n{green|' + data.value + '%}';
              },
              rich: {
                gray: {
                  color: '#6E7175',
                  fontSize: 11 * dpr,
                  align: 'center',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
                green: {
                  color: '#FF7818',
                  fontSize: 12 * dpr,
                  align: 'center',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }
              },
            }
          },
        }) :
        childNegativeValue.push({
          name: j,
          value: Math.abs(st[j].toFixed(2)),
          label: {
            normal: {
              formatter: function (data) {
                return '{gray|' + data.name + '}\n{green|' + -data.value + '%}';
              },
              rich: {
                gray: {
                  color: '#6E7175',
                  fontSize: 11 * dpr,
                  align: 'center',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",

                },
                green: {
                  color: '#58AEFF',
                  fontSize: 12 * dpr,
                  align: 'center',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }
              },
            }
          },
        })
    }
    let positiveSum = 0
    let negativeSum = 0
    Nsum.map((item) => {
      return parseFloat(negativeSum += item)
    })
    Psum.map((item) => {
      return parseFloat(positiveSum += item)
    })
    const levels = [
      {
        
        color: ['#FFE3BD', '#D7EDFF'],
        color:Math.abs(positiveSum)>Math.abs(negativeSum)?['#FFE3BD', '#D7EDFF']:['#D7EDFF', '#FFE3BD'] ,
        itemStyle: {
          normal: {
            gapWidth: 2 * dpr,
          },
        },
      },
      {
        itemStyle: {
          normal: {
            gapWidth: 2 * dpr,
          },
        },
      },
    ]

    let myChartt2 = this.refs[name] ? echarts.init(this.refs[name]) : '';
    myChartt2 && myChartt2.setOption({
      tooltip: {
        show: true,
        padding: [5 * dpr, 5 * dpr],
        formatter: '{b}:{c}%',
        textStyle: {
          // color:'red',
          fontSize: 12 * dpr,
        }
      },
      series: [{
        type: 'treemap',
        name: 'contribution treemap',
        data: [{
          name: 'lose',
          value: Math.abs(negativeSum / (positiveSum - negativeSum)),
          colorAlpha: [0.5, 1],
          children: childNegativeValue
        }, {
          name: 'profit',
          value: positiveSum / (positiveSum - negativeSum),
          colorAlpha: [0.5, 1],
          children: childPositiveValue
        },
        ],
        nodeClick: true,
        levels,
        zoomToNodeRatio: 1 * 0.5,
        roam: false,
        breadcrumb: {
          show: false,
        },
        width: '100%',
        height: '100%',
        top: 'top',
      }],
    })
    myChartt2 && myChartt2.on('finished', this.setState({ chartsState: false }), {})
    //判断图形是否画完
  }
  render() {
    const { chartsState } = this.state
    const { name } = this.props
    return (
      <div style={{ "height": '1.6rem' }} ref={name}></div>
    )
  }
}

Treemap2.propTypes = {
  data: PropTypes.object,
  call: PropTypes.func,
  name: PropTypes.string
}
Treemap2.defaultProps = {
  data: {}
}
export default Treemap2