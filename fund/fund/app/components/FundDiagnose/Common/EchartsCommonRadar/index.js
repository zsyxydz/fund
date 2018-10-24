import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import styles from './style.css';
import classNames from 'classnames/bind';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import Estimate from '../Estimate';
import Eva from '../Eva/index';
import { getDevicePixelRatio } from '../../../../utils/util'
import ReactLoading from "react-loading";
import $ from 'jquery';
import PropTypes from 'prop-types';
import {getId} from '../../../../utils/util'

const cx = classNames.bind(styles);


class EchartsTest extends Component {
  constructor() {
    super()
    this.state = {
      data: {
        "fund_scores": {
          "own_score": [
            {
              "title": "历史业绩",
              "score": 72,
              "tag": "良好"
            }, {
              "title": "风控能力",
              "score": 93,
              "tag": "优异"
            }, {
              "title": "基金经理",
              "score": 67,
              "tag": "良好"
            }, {
              "title": "基金公司",
              "score": 82,
              "tag": "优异"
            }, {
              "title": "盈利潜力",
              "score": 65,
              "tag": "良好"
            }
          ],
          "average_score": [
            {
              "title": "历史业绩",
              "score": 60
            }, {
              "title": "风控能力",
              "score": 80
            }, {
              "title": "基金经理",
              "score": 70
            }, {
              "title": "基金公司",
              "score": 75
            }, {
              "title": "盈利潜力",
              "score": 60
            }
          ],
          "total_own_score": 72,
          "total_average_score": 69,
          "percent_beyond": "65%"
        },
      },
      ttt: ''
    }
    this.randa = this.randa.bind(this)
  }
  
  
  randa() {
    const allFundData = require('../../../../../resource/alldata')
    const id = getId(this.props)
    const dpr = getDevicePixelRatio()
    const {states , one,two} = this.props
    const indicator = []
    const own_score = []
    const average_score = []
    for (let i = 0; i < allFundData[id].fund_scores.own_score.length; i++) {
      let element = allFundData[id].fund_scores.own_score[i];
      own_score.push(element.score)
      indicator.push({
        name: element.title, max: 100
      })
    }
    for (let i = 0; i < allFundData[id].fund_scores.average_score.length; i++) {
      let element = allFundData[id].fund_scores.average_score[i];
      average_score.push(element.score)
    }
    // console.log(one)
    // console.log(two)
    // 基于准备好的dom，初始化echarts实例
    let myChart = document.getElementById('main') ? echarts.init(document.getElementById('main')) : '';
    // 绘制图表
    myChart && myChart.setOption(
      states?{
        //基金诊断页面radar
      backgroundColor: '#fff',
      grid: {
        width: '105%',
        height: '105%'
      },
      radar: {
        indicator: indicator,
        shape: 'circle',
        splitNumber: 5,
        name: {
          textStyle: {
            color: '#AAAAAA',
          },
          fontSize: 12 * dpr
        },
        splitLine: {
          lineStyle: {
            color: [
              '#F0F0F0', '#F0F0F0',
              '#F0F0F0', '#F0F0F0',
              '#F0F0F0', '#F0F0F0'
            ].reverse()
          }
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['rgba(240, 240, 240, 1)', 'rgba(240, 240, 240, 0.8)', 'rgba(240, 240, 240, 0.6)', 'rgba(240, 240, 240, 0.4)', 'rgba(240, 240, 240, 0.2)'],
          }
        },
        axisLine: {
          lineStyle: {
            color: '#F0F0F0'
          }
        }
      },
      series: [
        {
          type: 'radar',
          itemStyle: {
            normal: {
              color: "#E9F5FF", // 图表中各个图区域的边框线拐点颜色
              lineStyle: {
                color:'white' // 图表中各个图区域的边框线颜色
              },
              areaStyle: {
                type: 'default'
              }
            }
          },
          data: [
            {
              value: average_score,
              itemStyle: {
                normal: {
                  areaStyle: {
                    type: 'default',
                    opacity: 1, // 图表中各个图区域的透明度
                    color: "#E9F5FF" // 图表中各个图区域的颜色
                  }
                }
              },
            },
            {
              value: own_score,
              itemStyle: {
                normal: {
                  
                  areaStyle: {
                    type: 'default',
                    opacity: 1,
                  },
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF7831'
                  }, {
                    offset: 1,
                    color: '#FFC129'
                  }])
                }
              },
            }],
          symbol: 'none',
        }
      ]
    }:{
      //pk页面radar
      
    }
  
  
  );
  }
  componentDidUpdate() {
    this.randa()
  }
  componentDidMount() {
    this.randa()
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
  render() {
    const allFundData = require('../../../../../resource/alldata')
    const id = getId(this.props)
    
    let _this = this
    const eva = <Eva data={allFundData[id]} />
    const { states } = this.props
    const { ttt } = this.state
    if (states) {
      return (
        <div className={cx("echartbox")} >
          <div className={cx("shares_more")}>
            <span>超过<span className={cx("more_num")}>{allFundData[id].fund_scores.percent_beyond}</span>的同类基金</span>
            <span className={cx("two_fund")}>
              <span className={cx("point_or")}></span><span className={cx("own_fund")}>本基金</span><span>{allFundData[id].fund_scores.total_own_score}</span>
              <span className={cx("point_cc")}></span><span className={cx("other_fund")}>同类平均</span><span>{allFundData[id].fund_scores.total_average_score}</span>
            </span>
          </div>
          {
            !ttt ? <div className={cx("default")}><ReactLoading type="spokes" color="#333" /></div> :
              <div className={cx("pos_score")}>
                <div id="main" className={cx("echartTest")}></div>
                <span className={cx("score")}>{allFundData[id].fund_scores.total_own_score}</span>
              </div>
          }
          <Estimate eva={eva} ></Estimate>
        </div>
      );
    } else {
      return (
        <div className={cx("echartbox1")} >
          {
            !ttt ? <div className={cx("default")}><ReactLoading type="spokes" color="#333" /></div> :
              <div className={cx("pos_score")}>
                <div id="main2" className={cx("echartTest","e")}></div>
              </div>
          }
        </div>
      );
    }

  }
}
EchartsTest.propTypes = {
  states: PropTypes.bool,
  one:PropTypes.array,
  two:PropTypes.array,
}
EchartsTest.defaultProps = {
  states: true,
  one:[],
  two:[],
}

export default EchartsTest;