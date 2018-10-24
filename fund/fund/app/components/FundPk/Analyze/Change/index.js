
import React from 'react';
import classNames from 'classnames/bind';
import echarts from 'echarts/lib/echarts';
import styles from './styles.less';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

import Echarts from 'echarts-for-react'
import { getDevicePixelRatio } from '../../../../utils/util'



const cx = classNames.bind(styles);
class Change extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNode: null,
      yValue: null,
      xValue: "",
      hash: {},
      xDate: [],
      d: []
    }
  }
  componentDidMount() {
    let c = {
      date: ["2018Q2", "2018Q1", "2017Q4", "2017Q3"],
      one: ["89.22", "91.05", "90.59", "90.96"],
      two: ["90.96", "94.09", "91.22", "92.65"],
    }
    let allYValue = [...c["one"],...c["two"]]
    allYValue.sort(function (a, b) {
      return a-b;
    })
    this.setState({
      d: [c.date[0], c.one[0], c.two[0]],
      xDate: [c.date[c.date.length - 1]]
    })
    let _this = this
    const dpr = getDevicePixelRatio()
    let myChartg = echarts.init(document.getElementById('maing'));

    myChartg.setOption({

      color: ['#F1B800', '#ACBCD6', '#C9E5FF'],
      grid: {
        left: '0%',
        right: '1%',
        bottom: '0%',
        top: '9%',
        containLabel: true
      },
      tooltip: {
        triggerOn: "click",
        trigger: 'axis',
        label: {
          show: true
        },
        textStyle: {
          color: '#45474A'
        },
        extraCssText: 'background-color: #F5FAFF;font-size:0.11rem;z-index:99;',
        axisPointer: {
          type: 'line',
          trigger: 'axis',
          axis: 'auto',
          snap: false,
          lineStyle: {
            color: "#FE0002",
            width: 0.5 * dpr
          },
          shadowStyle: {
            color: "#FFF4E5",
            shadowColor: 'rgba(255,244,229,0.50)',
            opacity: 0.5
          }
        },
        // formatter回调，获取折线图的dom节点
        formatter: function (params) {
          for (let i = 0; i < params.length; i++) {
            _this.state.hash[params[i].seriesName] = {
              val: "",
              date: "",
              id: ''
            }
            _this.state.hash[params[i].seriesName].date = params[i].axisValueLabel
            _this.state.hash[params[i].seriesName].val = params[i].data
            _this.state.hash[params[i].seriesName].id = params[i].seriesIndex
          }
          _this.setState({
            yValue: 1
          })
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
          length: 1,
          lineStyle: {
            shadowColor: '#00f',
            shadowOffsetY: -1
          }
        },
        axisLabel: {
          interval: -1,
          showMinLabel: true,
          showMaxLabel: true,
          color: '#fff',
          padding: [0, 0, 0, 70],
          textStyle: {
            fontSize: 8 * dpr // 让字体变大
          },
        },
        axisLabel: { show: false },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.06)'
          }
        },
        data: c.date.reverse()
      },
      yAxis: {
        splitNumber: 4,
        type: 'value',
        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        interval: (Math.ceil(allYValue[allYValue.length - 1]/10)*10-Math.floor(allYValue[0]/10)*10) / 4,
        min: Math.floor(allYValue[0]/10)*10,
        max: Math.ceil(allYValue[allYValue.length - 1]/10)*10,
        // interval:(allYValue[allYValue.length-1]-allYValue[0])/4,
        // min: "dataMin",
        // max: "dataMax",
        axisLabel: {
          margin: 0,
          inside: true,
          color: '#6E7175',
           formatter: function (value) {
            return value.toFixed(2) + "%\n";
          },
          fontSize: 10 * dpr
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['rgba(0,0,0,0.06)'],
            width: 1,
            type: 'solid'
          }
        },
        axisLine: {
          show: false
        },
        axisPointer: {
          snap: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: '富国中证:',
          type: 'line',
          symbol: "circle",
          lineStyle: {
            normal: {
              width: 2 * dpr,
              type: 'solid'
            }
          },
          z: 102,
          // data: [20, 40, 60, 90, 22],
          data: c['one'].reverse()
          // data: yValueOwn.reverse()
        },
        {
          name: '易方达50:',
          type: 'line',
          symbol: "circle",
          lineStyle: {
            normal: {
              width: 2 * dpr,
              type: 'solid'
            }
          },
          z: 101,
          data: c['two'].reverse()
          // data: [50, 20, 80, 50, 30],
          // data: yValueAve.reverse()
        }
      ]
    })
  }
  render() {
    const { hash, d, xDate } = this.state
    let list = []
    let time = ""
    const defaults = [
      <span key={0 + "i"} className={cx('fund-content')}><span className={cx('color', 'o' + 0 + '-color')}></span><span>富国中证:</span><span className={cx('value')}>{d[1]}</span></span>,
      <span key={1 + "i"} className={cx('fund-content')}><span className={cx('color', 'o' + 1 + '-color')}></span><span>易方达50:</span><span className={cx('value')}>{d[2]}</span></span>,
      // <span key={2 + "i"} className={cx('fund-content')}><span className={cx('color', 'o' + 2 + '-color')}></span><span>同类平均:</span><span className={cx('value')}>{d[3]}</span></span>
    ]
    for (let i in hash) {
      time = hash[i].date
      if (hash[i].id != 2) {
        list.push(<span key={i} className={cx('fund-content')}><span className={cx('color', 'o' + hash[i].id + '-color')}></span><span>{i}</span><span className={cx('value')}>{hash[i].val}%</span></span>)
      }
    }
    return (
      <div className={cx("change")}>
        <div id="maing" className={cx("echartTest")}></div>
        <div className={cx('date', 'clearfix')}><span className={cx('date-left')}>{xDate[0]}</span><span className={cx('date-right')}>{xDate[1]}</span></div>
        <div className={cx('bottom')}>
          <div className={cx('fund-three-num', 'clearfix')} >
            <span className={cx('data-title')}>{time ? time : d[0]}</span>
            {list.length>0?list:defaults}

          </div>
        </div>
      </div>


    )
  }
}
export default Change;
