import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { getDevicePixelRatio } from '../../../../utils/util'
import SectionContainer from '../../../Common/SectionContainer'
import ReactLoading from "react-loading";
import $ from 'jquery';
const cx = classNames.bind(styles);

class EchartsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialNode: null,
      yValue: null,
      span_child: [],
      xValue: "",
      hash: {},
      newData: [],
      x: 1,
      defaul: {},
      follow_data: [],
      ttt: '',
      

    }
    this.reff = this.reff.bind(this);
    this.reloadCharts = this.reloadCharts.bind(this);
    this.onTabChangeCommon = this.onTabChangeCommon.bind(this);
  }

  componentWillMount() {
    const aaa = this.props.data
    this.setState({
      // newData: data
      newData: aaa,
      follow_data: aaa.slice(0, 245)
    })
  }
  componentWillReceiveProps(nextProps) {

  }
  onTabChangeCommon(tab) {
    let self = this
    const { newData } = this.state
    let cc = newData
    tab === "近一年" ? self.setState({ follow_data: cc.slice(0, 245) }) : ""
    tab === "近三年" ? self.setState({ follow_data: cc.slice(0, 733) }) : ""
    tab === "全部" ? self.setState({ follow_data: cc }) : ""

    // console.log(follow_data)
  }
  componentDidUpdate() {
    const { follow_data } = this.state

    this.reloadCharts(follow_data);
  }
  componentDidMount() {
    const { follow_data } = this.state
    this.reloadCharts(follow_data);
    let _this = this
    $.ajax({
      url: "http://api.fund.eastmoney.com/pinzhong/LJSYLZS?fundCode=000130&indexcode=000300&type=y&_=1538974894321",
      type: 'get',
      dataType: 'jsonp',
      success: function (res) {
        _this.setState({ ttt: 222 })
      },
      error: function () {
        _this.setState({ ttt: 222 })
      }
    })
  }
  reloadCharts(value) {
    var _this = this
    // const newData = this.props.data
    const { follow_data } = this.state
    let data = []
    data = follow_data
    let weighted_average = []
    let quantile = []
    let danger = []
    let middle = []
    let chance = []
    let date = []
    _this.state.defaul = data[0]
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      date.push(element.date.split('-').join('/'))
      weighted_average.push(element.index.toFixed(2))
      quantile.push(element.pe_ttm_weighted_average.toFixed(2))
      danger.push(element.pe_ttm_danger.toFixed(2))
      middle.push(element.pe_ttm_middle.toFixed(2))
      chance.push(element.pe_ttm_chance.toFixed(2))
    }

    const dpr = getDevicePixelRatio()
    let myChartq = document.getElementById('mains') ? echarts.init(document.getElementById('mains')) : '';
    myChartq && myChartq.setOption({

      color: ['#FF7818', '#58AEFF', '#FE0002', '#8490A1', '#4B9F3C'],
      grid: {
        left: '0%',
        right: '1%',
        bottom: '0%',
        top: '6%',
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
        //formatter回调，获取折线图的dom节点
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
        // position: {
        //   top: 12,
        //   left: 22
        // },
        axisTick: {
          // inside: false,
          length: 1,
          lineStyle: {
            // color: '#00f',
            shadowColor: '#00f',
            shadowOffsetY: -1
          }
        },
        axisLabel: {
          interval: 100000,
          showMinLabel: false,
          showMaxLabel: false,
          color: '#6E7175',
          textStyle: {
            fontSize: 11 * dpr // 让字体变大
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(0,0,0,0.06)'
          }
        },
        data: date.reverse(),
        // data: ['2017/08/13', '2017/09/13', '2017/10/13', '2017/11/13', '2017/12/13', '2018/01/13', '2018/02/13', '2018/03/13', '2018/04/13', '2018/05/13', '2018/06/13', '2018/07/13', '2018/08/13', '2017/09/03']
      },
      yAxis: [{
        type: 'value',
        splitNumber: 4,

        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        axisLabel: {
          showMaxLabel: false,
          margin: 0,
          inside: true,
          color: '#6E7175',
          formatter: "{value}\n",
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
          },
          // onZeroAxisIndex:1
        },
        axisPointer: {
          snap: true,
          textStyle: {
            color: '#fff'
          }
        }
      }, {
        type: 'value',
        splitNumber: 4,

        splitArea: {
          areaStyle: {
            color: "#fff"
          }
        },
        axisLabel: {
          showMaxLabel: false,
          margin: 0,
          inside: true,
          color: '#6E7175',
          formatter: "{value}\n",
          fontSize: 10 * dpr
        },
        splitLine: {
          show: false,
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
          name: '收盘点位',
          type: 'line',
          // smooth: 'none',
          yAxisIndex: 1,
          symbol: 'circle',
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              type: "solid",
              width: 1 * dpr
            }
          },
          z: 1000000,
          data: weighted_average.reverse(),
          // data: [300, 1110, 950, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        },
        {
          name: 'PE-TTM',
          type: 'line',
          // smooth: 'none',
          symbol: 'circle',
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              width: 1 * dpr,
              type: 'solid'
            }
          },
          z: 1000000,
          data: quantile.reverse(),
          // data: [302, 255, 257, 260, 270, 340, 650, 500, 404, 390, 383, 390, 401, 500, 570, 750, 700, 679, 560, 340],
        },
        {
          name: '危险值',
          // yAxisIndex: 1,
          type: 'line',
          // smooth: 'none',
          symbol: 'circle',
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              width: 1 * dpr,
              type: 'dashed'
            }
          },
          z: 1000000,
          data: danger.reverse(),
          // data: [722, 2125, 1257, 2260, 222, 340, 650, 660, 404, 370, 653, 390, 401, 200, 570, 720, 700, 679, 420, 760],
        },
        {
          name: '中位值',
          type: 'line',
          // yAxisIndex: 1,
          symbol: "circle",
          itemStyle: {
            borderWidth: 10 * dpr,
          },
          lineStyle: {
            normal: {
              width: 1 * dpr,
              type: 'dashed'
            }
          },
          z: 1000000,
          data: middle.reverse(),
          // data: [820, 932, 901, 934, 1290, 1330, 1320, 260, 222, 340, 650, 660, 404, 370, 653, 390, 401, 200]
        },
        {
          name: '机会值',
          type: 'line',
          // yAxisIndex: 1,
          symbol: "circle",
          itemStyle: {
            borderWidth: 10 * dpr,

          },
          lineStyle: {
            normal: {
              width: 1 * dpr,
              type: 'dashed'
            }
          },
          z: 1000000,
          data: chance.reverse(),
          // data: [542, 1462, 401, 933, 990, 530, 650, 257, 260, 270, 340, 650, 500, 404, 390, 383, 390, 401, 500, 570, 75]
        }
      ]
    });
    
  }


  reff() {
    this.state.initialNode = this.refs.echarts

    console.log(11, this.state.initialNode)
  }

  render() {
    const { yValue, hash, xValue, defaul, ttt,newData ,follow_data} = this.state;
    const { data, fundId } = this.props;



    // const aaa = this.props.data

    // this.setState({
    //   // newData: data
    //   newData: aaa,
    //   follow_data: aaa.slice(0, 245)
    // })




    const Xtime = xValue
    const text = []
    let index = 0
    for (let n in hash) {
      index++
      text.push(<li key={index}><span className={cx("bg-color")}></span><span>{n}</span><span className={cx("eee")}>{hash[n].val}</span></li>)
    }
    // console.log(defaul.pe_ttm_danger)
    const defaults = [
      <li key={1}><span className={cx("bg-color")}></span><span>收盘点位</span><span className={cx("eee")}>{defaul.index && defaul.index.toFixed(2)}</span></li>,
      <li key={2}><span className={cx("bg-color")}></span><span>PE-TTM</span><span className={cx("eee")}>{defaul.pe_ttm_weighted_average && defaul.pe_ttm_weighted_average.toFixed(2)}</span></li>,
      <li key={3}><span className={cx("bg-color")}></span><span>危险值</span><span className={cx("eee")}>{defaul.pe_ttm_danger && defaul.pe_ttm_danger.toFixed(2)}</span></li>,
      <li key={4}><span className={cx("bg-color")}></span><span>中位值</span><span className={cx("eee")}>{defaul.pe_ttm_middle && defaul.pe_ttm_middle.toFixed(2)}</span></li>,
      <li key={5}><span className={cx("bg-color")}></span><span>机会值</span><span className={cx("eee")}>{defaul.pe_ttm_chance && defaul.pe_ttm_chance.toFixed(2)}</span></li>]
    return (
      <SectionContainer titleType="text" sectionTitle="跟踪标的" onTabChanged={this.onTabChangeCommon} sectionTitleIconSrc="OpenInterest/follow@3x.png" rightSideType="switch" rightSideValues={["近一年", "近三年", "全部"]}>
        {
          !ttt ? <div className={cx("default")}><ReactLoading type="spokes" color="#333" /></div> :
            <div className={cx("echartboxs")}>
              <div id="mains" className={cx("echartTest")} ></div>
              <div className={cx("date")}><span>{data[data.length - 1].date.split('-').join('/')}</span><span>{data[0].date.split('-').join('/')}</span></div>
              <span className={cx("sci-left")}>{fundId == 'fd110003' ? '上证50PE' : '中证红利PE'}</span>
              <span className={cx("sci-right")}>{fundId == 'fd110003' ? '上证50指数' : '中证红利指数'}</span>
              <div className={cx("introduce", Xtime ? "weight" : "")} >
                <ul className={cx("clearfix")} >
                  <li>{Xtime ? Xtime : defaul.date && defaul.date.split('-').join('/')}</li>
                  {text.length !== 0 ? text : defaults}
                </ul>
              </div>
            </div>
        }

      </SectionContainer>
    );
  }
}
EchartsBar.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  data: PropTypes.array
}

EchartsBar.defaultProps = {
  info: "",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true,
  data: []

}

export default EchartsBar;