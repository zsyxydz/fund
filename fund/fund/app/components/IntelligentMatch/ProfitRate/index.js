import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { getDevicePixelRatio } from '../../../utils/util'


const cx = classNames.bind(styles);

class Echartsline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNode: null,
      yValue: null,
      xValue: "",
      hash: {},
      date: [],
      allData: []
    }
    this.charts = this.charts.bind(this)
  }
  componentWillReceiveProps(nextProps) {
  }
  componentWillMount(){
    const { data } = this.props
    this.setState({
      allData:data
    })
  }
  componentDidMount(){
    this.charts()
  }
  charts() {
    const { data } = this.props
    let YleftValue = []
    let YrightValue = []
    let num
    let dates = []
    for (let i = 0; i < data.length; i++) {
      const ave = data[i].date;
      dates.push(ave)
    }

    for (let i = 0; i < data.length; i++) {
      let first = data[0].stand_value ? data[0].stand_value : 0;
      const ave = data[i].stand_value ? data[i].stand_value : 0;
      YrightValue.push((ave-first).toFixed(2)*100)
    }
    // console.log(YrightValue)
    for (let i = 0; i < data.length; i++) {
      let first = data[0].user_value ? data[0].user_value : 0;
      const ave = data[i].user_value ? data[i].user_value : 0;
      YleftValue.push((ave-first).toFixed(2)*100)
    }

    let allYValue = []
    allYValue = [...YleftValue,...YrightValue]
    allYValue.sort(function (a, b) {
      return a-b;
    })
    // console.log(allYValue[0],Math.floor(allYValue[0]))
    let _this = this
    const dpr = getDevicePixelRatio()
    let myChartc = echarts.init(document.getElementById('mainc'));
    myChartc.setOption({

      color: ['#FF7818', '#C9E5FF'],
      grid: {
        left: '0%',
        right: '1%',
        bottom: '0%',
        top: '9%',
        containLabel: true
      },
      tooltip: {
        // showContent:false,
        triggerOn: "click",
        trigger: 'axis',
        label: {
          show: true
        },
        position: ['0', '200'],
        padding: [18, 15],
        backgroundColor: '#F5FAFF',
        textStyle: {
          color: '#45474A'
        },
        // alwaysShowContent: true,
        extraCssText: 'background-color: #F5FAFF;font-size:0.11rem;z-index:99;',
        axisPointer: {
          type: 'shadow',
          trigger: 'axis',
          axis: 'auto',
          snap: false,
          shadowStyle: {
            color: "#FFF4E5",
            shadowColor: 'rgba(255,244,229,0.50)',
            opacity: 0.5
          }
        },
        // formatter回调，获取折线图的dom节点
        formatter: function (params) {
          // console.log(params)
          for (let i = 0; i < params.length; i++) {
            _this.state.hash[params[i].seriesName] = {
              val: ""
            }
            _this.state.hash[params[i].seriesName].val = params[i].data
            _this.state.xValue = params[i].axisValueLabel
          }
          _this.setState({
            yValue: 1
          })
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        position: {
          top: 12,
          left: 22
        },
        axisTick: {
          // inside: false,
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
          color: '#6E7175',
          padding: [0, 0, 0, 70],
          textStyle: {
            fontSize: 8 * dpr // 让字体变大
          },
        },
        axisLine: {
          show:false,
          lineStyle: {
            color: 'rgba(0,0,0,0.06)'
          }
        },
        data: [],
        // data: XbottomVlaue
      },
      yAxis: [{
        type: 'value',
        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        interval: (Math.ceil(allYValue[allYValue.length - 1]/10)*10-Math.floor(allYValue[0]/10)*10) / 4,
        min: Math.floor(allYValue[0]/10)*10,
        max: Math.ceil(allYValue[allYValue.length - 1]/10)*10,
        axisLabel: {
          // showMaxLabel: false,
          margin: 0,
          inside: true,
          color: '#6E7175',
          formatter: function(value){
            return value+"%\n"
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
          lineStyle: {
            color: '#fff'
          }
        },
        axisPointer: {
          snap: true,
          textStyle: {
            color: '#fff'
          }
        }
      },],
      series: [{
        name: '客户收益率:',
        type: 'line',
        smooth: true,
        // yAxisIndex: 1,
        symbol: "circle",
        itemStyle: {
        },
        lineStyle: {
          normal: {
            width: 3,
            type: 'solid'
          }
        },
        z: 1000000,
        // data: [50, 20, 80, 50, 30]
        data: YleftValue
      },
      {
        name: '基金收益率:',
        type: 'line',
        symbol: "circle",
        smooth: true,
        itemStyle: {
        },
        lineStyle: {
          normal: {
            width: 3,
            type: 'solid'
          }
        },
        z: 100000,
        // data: [20, 40, 60, 90,22]
        data: YrightValue

      }

      ]
    });
  }
  componentWillUpdate(){
    const { data } = this.props
  }
  componentDidUpdate() {
    this.charts()

  }
  render() {
    const { info, more, isShowBack, isShowPKBtn, data, days } = this.props;
    const { yValue, hash, xValue, date } = this.state;
    let dates = []
    if (data) {
      for (let i = 0; i < data.length; i++) {
        const ave = data[i].date;
        dates.push(ave)
      }
    }
    
    let b = dates[dates.length - 1].split('')
    let c = dates[0].split('')
    b.splice(4,0,'.')
    b.splice(7,0,'.')
    c.splice(4,0,'.')
    c.splice(7,0,'.')
    
    
    return (
      <div className={cx("echartboxs")}>
        <div id="mainc" className={cx("echartTest")}></div>
        <p className={cx("date", 'clearfix')}><span>{b.join('')}</span><span>{c.join('')}</span></p>
      </div>
    );
  }
}
Echartsline.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  data: PropTypes.array,
  days: PropTypes.number
}

Echartsline.defaultProps = {
  info: "",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true,
  data: [],
  days: 30
}

export default Echartsline;