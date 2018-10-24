import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
import { getDevicePixelRatio } from '../../../../../utils/util'
import { dataFormatMixin } from 'echarts/lib/util/model';


const cx = classNames.bind(styles);

class Echartsline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialNode: null,
      yValue: null,
      xValue: "",
      hash: {}
    }
  }
  componentDidMount() {
    const { fundData } = this.props;
    const data = fundData.fund_position.position_change
    let _this = this
    _this.state.defaul = data
    const xValue = []
    const yValueOwn = []
    const yValueAve = []
    for (let i = 0; i < data.data.length; i++) {
      const element = data.data[i];
      xValue.push(element.date)
      yValueOwn.push((element.this * 100).toFixed(2))
      yValueAve.push((element.average * 100).toFixed(2))
    }
    let allYvalue = []
    allYvalue = [...yValueOwn,...yValueAve]
    allYvalue.sort(function(a,b){
      return a-b
    })
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
          type: 'line',
          trigger: 'axis',
          axis: 'auto',
          snap: false,
          lineStyle: {
            color: "#FE0002",
            width: 1 * dpr
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
        // position: {
        //   top: 12,
        //   left: 22
        // },
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
          color: '#fff',
          padding: [0, 0, 0, 70],
          textStyle: {
            fontSize: 8 * dpr // 让字体变大
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.06)'
          }
        },
        // data: ['2017Q1', '2017Q2', '2017Q3', '2017Q4','2017Q4']
        data: xValue
        // data:[]
      },
      yAxis: [{
        type: 'value',
        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        // interval:(allYvalue[allYvalue.length-1]-allYvalue[0])/4,
        // min: "dataMin",
        // max: "dataMax",

        interval: (Math.ceil(allYvalue[allYvalue.length - 1]/10)*10-Math.floor(allYvalue[0]/10)*10) / 4,
        min: Math.floor(allYvalue[0]/10)*10,
        max: Math.ceil(allYvalue[allYvalue.length - 1]/10)*10,
        axisLabel: {
          // showMaxLabel: false,
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
      }],
      series: [
        {
          name: '本基金仓位:',
          type: 'line',
          symbol: "circle",
          itemStyle: {
          },
          lineStyle: {
            normal: {
              width: 2 * dpr,
              type: 'solid'
            }
          },
          z: 1000000,
          // data: [20, 40, 60, 90,22],
          data: yValueOwn.reverse()
        },
        {
          name: '同类平均仓位:',
          type: 'line',
          symbol: "circle",
          itemStyle: {
          },
          lineStyle: {
            normal: {
              width: 2 * dpr,
              type: 'solid'
            }
          },
          z: 1000000,
          // data: [50, 20, 80, 50, 30],
          data: yValueAve.reverse()
        }
      ]
    });
    myChartc.on('click', function (params) {
      console.log("图已画完", params);
    });

  }
  render() {

    const { info, more, isShowBack, isShowPKBtn, fundData } = this.props;
    const { yValue, hash, xValue, defaul } = this.state;
    const data = fundData.fund_position.position_change
    let index = 0
    let contentText = []
    for (let i in hash) {
      index++
      contentText.push(<li key={index}><span className={cx("bg-color")}></span><span>{i}</span><span>{hash[i].val}%</span></li>)
    }
    contentText.reverse()
    const defaults = [
      <li key={2}><span className={cx("bg-color")}></span><span>同类平均仓位:{defaul && (defaul.data[0].average * 100).toFixed(2)}%</span></li>,
      <li key={1}><span className={cx("bg-color")}></span><span>本基金仓位:{defaul && (defaul.data[0].this * 100).toFixed(2)}%</span></li>
    ]
    return (
      <div className={cx("echartboxs")}>
        <div id="mainc" className={cx("echartTest")}></div>
        <p className={cx("timeCharts")}><span>{data.data[0].date}</span><span>{data.data[data.data.length - 1].date}</span></p>
        <span className={cx("cw")}>仓位</span>
        <div className={cx("introduce", xValue ? "weight" : '')} >
          <ul className={cx("clearfix")} >
            <li>{xValue ? xValue : defaul && defaul.data[0].date}</li>
            {contentText.length !== 0 ? contentText : defaults}
          </ul>
        </div>
      </div>
    );
  }
}
Echartsline.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  fundData: PropTypes.object
}

Echartsline.defaultProps = {
  info: "",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true
}

export default Echartsline;