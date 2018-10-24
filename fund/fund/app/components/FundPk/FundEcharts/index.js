
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import LineEcharts from '../../FundDiagnose/BasicAnaylze/TrackEcharts';
import Echarts from 'echarts-for-react'
import { getDevicePixelRatio } from '../../../utils/util'
const cx = classNames.bind(styles);
const zero = function (value) {
  let newArray = []
  for (let i = 0; i < value.length; i++) {
    newArray.push((value[i] - value[0]).toFixed(2))
  }
  return newArray
}
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabTime: 'oneMonth'
    }
    this.onTabChangeCommon = this.onTabChangeCommon.bind(this)
    this.tabChange = this.tabChange.bind(this)
  }
  onTabChangeCommon(value) {
  }
  tabChange(value) {
    this.setState({
      tabTime: value
    })
  }
  render() {
    const downData = require('../../../../resource/fund2')
    const dpr = getDevicePixelRatio()
    const { tabTime } = this.state
    let date = []
    let dates = []
    let data1 = []
    let data2 = []
    for (let i = 0; i < downData.points.length; i++) {
      const element = downData.points[i];
      if (element.user_value && element.stand_value) {
        data1.push((element.user_value*100).toFixed(2))
        data2.push((element.stand_value*100).toFixed(2))
        date.push(element.date)
      }
    }

    let allData = []
    switch (tabTime) {
      case "oneMonth":
        data1 = zero(data1.splice(data1.length - 23, data1.length - 1))
        data2 = zero(data2.splice(data2.length - 23, data2.length - 1))
        // allData = [...data1,...data2]
        dates = [date[date.length - 23], date[date.length - 1]]
        break;
      case "threeMonth":
        data1 = zero(data1.splice(data1.length - 67, data1.length - 1))
        data2 = zero(data2.splice(data2.length - 67, data2.length - 1))
        dates = [date[date.length - 67], date[date.length - 1]]
        break;
      case "sixMonth":
        data1 = zero(data1.splice(data1.length - 127, data1.length - 1))
        data2 = zero(data2.splice(data2.length - 127, data2.length - 1))
        dates = [date[date.length - 127], date[date.length - 1]]
        break;
      case "all":
        dates = [date[0], date[date.length - 1]]
        break;
      default:
        break;
    }
    allData = [...data1, ...data2]
    allData.sort(function (a, b) {
      return a - b;
    })

    const option = {
      color: ["rgba(255,255,255,1)", "rgba(255,255,255,0.5)"],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '0%',
        top: '0%',
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
          // axis: 'auto',
          // snap: false,
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
          interval: 100000,
          showMinLabel: false,
          showMaxLabel: false,
          color: '#fff',
          textStyle: {
            fontSize: 11 * dpr  // 让字体变大
          },
        },
        axisLine: {
          show:false,
          color: '#fff',
          lineStyle: {
            color: 'rgba(255,255,255,0.6)'
          }
        },
        data: [],
        // data: ['2017/08/13', '2017/09/13', '2017/10/13', '2017/11/13', '2017/12/13', '2018/01/13', '2018/02/13', '2018/03/13', '2018/04/13', '2018/05/13', '2018/06/13', '2018/07/13', '2018/08/13', '2017/09/03']
      },
      yAxis: [{
        type: 'value',
        interval: (Math.ceil(allData[allData.length - 1]/10)*10 - Math.floor(allData[0]/10)*10) / 4,
        min: Math.floor(allData[0]/10)*10,
        max: Math.ceil(allData[allData.length - 1]/10)*10,
      //  min:"dataMin",
      //  max:"dataMax",
        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        axisLabel: {
          showMaxLabel: false,
          margin: 0,
          inside: true,
          color: 'rgba(255,255,255,0.6)',
          formatter: function (value) {
            return value.toFixed(2) + "%\n";
          },
          fontSize: 9 * dpr,
          fontFamily: 'SFProText-Regular'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['rgba(255,255,255,0.4)'],
            width: 1 * dpr,
            type: 'solid'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          },
        },
        axisPointer: {
          snap: true,
          textStyle: {
            color: '#fff'
          }
        },
        zlevel:100
      },],
      series: [
        {
          name: '收盘点位',
          type: 'line',
          smooth: 'none',
          // yAxisIndex: 1,
          symbol: 'circle',
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              type: "solid",
              width: 2 * dpr
            }
          },
            // data:[1,2,3,4,6,7],
            z: 1000000,
          data: data1,
        },
        {
          name: 'PE-TTM',
          type: 'line',
          smooth: 'none',
          symbol: 'circle',
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              width: 2 * dpr,
              type: 'solid'
            }
          },
          z: 1000000,
            // data:[2,6,3,5,6,7],
          data: data2,
        }

      ]
    }
    return (
      <div className={cx("pklineEcharts")}>
        <div className={cx("title")}><span><span></span>富国中证</span><span><span></span>易方达50</span></div>
        <Echarts option={option} style={{ height: '2.4rem', width: '100%', 'marginTop': '0.35rem' }} />
        <p className={cx("date", 'clearfix')}><span>{dates[0]}</span><span>{dates[1]}</span></p>
        <div className={cx("bottom-tab")}>
          <ul className={cx("clearfix")}>
            <li className={cx(tabTime === 'oneMonth' ? 'white' : '')} onClick={() => {
              this.tabChange("oneMonth")
            }}>近一月</li>
            <li className={cx(tabTime === 'threeMonth' ? 'white' : '')} onClick={() => {
              this.tabChange("threeMonth")
            }}>近三月</li>
            <li className={cx(tabTime === 'sixMonth' ? 'white' : '')} onClick={() => {
              this.tabChange("sixMonth")
            }}>近半年</li>
            <li className={cx(tabTime === 'all' ? 'white' : '')} onClick={() => {
              this.tabChange("all")
            }}>全部</li>
          </ul>
        </div>


      </div>
    )
  }
}
export default Edit;
