import React from 'react'
import ReactEcharts from 'echarts-for-react'
import _ from 'lodash'
import { getDevicePixelRatio } from '../../../../../utils/util'
const dpr = getDevicePixelRatio()
import PropTypes from 'prop-types';

class Treemap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    // this.charts = this.charts.bind(this)
  }
  // charts() {
  //   const { data } = props
  //   // console.log('~~~~~',data)
  //   let father = []
  //   let childPositiveValue = []
  //   let childNegativeValue = [

  //   ]
  //   let Psum = null
  //   let Nsum = null
  //   for (let i in data) {
  //     let st = data.child
  //     for (let j in st) {
  //       if (j !== 'value')
  //         st[j] > 0 ? Psum += st[j].toFixed(2) : Nsum += st[j].toFixed(2)
  //       st[j] > 0 ? childPositiveValue.push(
  //         {
  //           name: j,
  //           value: Math.abs(st[j].toFixed(2)),
  //           label: {
  //             normal: {
  //               color: '#333',
  //               textStyle: {
  //                 color: '#33517a',
  //               },
  //               formatter: function (data) {
  //                 return '{gray|' + data.name + '}\n{green|' + data.value + '%}';
  //               },
  //               rich: {
  //                 gray: {
  //                   color: '#6E7175',
  //                   fontSize: 11 * dpr,
  //                   align: 'center',
  //                   overflow: "hidden",
  //                   textOverflow: "ellipsis",
  //                   whiteSpace: "nowrap",

  //                 },
  //                 green: {
  //                   color: '#FF7818',
  //                   fontSize: 12 * dpr,
  //                   align: 'center',
  //                   overflow: "hidden",
  //                   textOverflow: "ellipsis",
  //                   whiteSpace: "nowrap",
  //                 }
  //               },
  //             }
  //           },
  //         }) :
  //         childNegativeValue.push({
  //           name: j,
  //           value: Math.abs(st[j].toFixed(2)),
  //           label: {
  //             normal: {
  //               // color: '#333',
  //               // fontSize: 44,
  //               formatter: function (data) {
  //                 return '{gray|' + data.name + '}\n{green|' + -data.value + '%}';
  //               },
  //               rich: {
  //                 gray: {
  //                   color: '#6E7175',
  //                   fontSize: 11 * dpr,
  //                   align: 'center',
  //                   overflow: "hidden",
  //                   textOverflow: "ellipsis",
  //                   whiteSpace: "nowrap",

  //                 },
  //                 green: {
  //                   color: '#58AEFF',
  //                   fontSize: 12 * dpr,
  //                   align: 'center',
  //                   overflow: "hidden",
  //                   textOverflow: "ellipsis",
  //                   whiteSpace: "nowrap",
  //                 }
  //               },
  //             }
  //           },
  //         })
  //     }
  //   }

  //   const levels = [
  //     {
  //       color: ['#D7EDFF', '#FFE3BD'],
  //       itemStyle: {
  //         normal: {

  //           gapWidth: 2 * dpr,
  //         },
  //       },
  //     },
  //     {
  //       itemStyle: {
  //         normal: {
  //           gapWidth: 2 * dpr,
  //         },
  //       },
  //     },
  //   ]
  //   const option = {
  //     tooltip: {
  //       show: true,
  //       padding: [5 * dpr, 5 * dpr],
  //       formatter: '{b}:{c}%',
  //       textStyle: {
  //         // color:'red',
  //         fontSize: 12 * dpr,
  //       }
  //     },
  //     series: [{
  //       type: 'treemap',
  //       name: 'contribution treemap',
  //       // squareRatio:(3)*0.5,
  //       data: [{
  //         name: 'lose',
  //         value: Nsum / (Psum - Nsum),
  //         colorAlpha: [0.5, 1],
  //         children: childNegativeValue
  //       }, {
  //         name: 'profit',
  //         value: Psum / (Psum - Nsum),
  //         colorAlpha: [0.5, 1],
  //         children: childPositiveValue
  //       },

  //       ],
  //       nodeClick: true,
  //       levels,
  //       zoomToNodeRatio: 1 * 0.5,
  //       roam: false,
  //       breadcrumb: {
  //         show: false,
  //       },
  //       width: '100%',
  //       height: '100%',
  //       top: 'top',

  //     }],
  //   }

  //   // console.log(this.refs.treeMap)
  // }
  componentDidMount(){
    // console.log(this.refs.treeMap)
    this.refs.treeMap.on('finished',console.log(123),{})



  }
  render() {
    const { data } = this.props
    // console.log('~~~~~',data)
    let father = []
    let childPositiveValue = []
    let childNegativeValue = [

    ]
    let Psum = null
    let Nsum = null
    for (let i in data) {
      let st = data.child
      for (let j in st) {
        if (j !== 'value')
          st[j] > 0 ? Psum += st[j].toFixed(2) : Nsum += st[j].toFixed(2)
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
                // color: '#333',
                // fontSize: 44,
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
    }

    const levels = [
      {
        color: ['#D7EDFF', '#FFE3BD'],
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
    const option = {
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
        // squareRatio:(3)*0.5,
        data: [{
          name: 'lose',
          value: Nsum / (Psum - Nsum),
          colorAlpha: [0.5, 1],
          children: childNegativeValue
        }, {
          name: 'profit',
          value: Psum / (Psum - Nsum),
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
    }
    return (
      <ReactEcharts style={{ "height": '1.6rem' }} ref="treeMap"
        option={option}
      />
    )
  }
}




Treemap.propTypes = {
  data: PropTypes.object,
  call: PropTypes.func
}
Treemap.defaultProps = {
  data: {}
}
export default Treemap