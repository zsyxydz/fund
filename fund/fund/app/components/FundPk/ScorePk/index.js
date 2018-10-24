
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../Common/SectionContainer'
import EchartsCommonRadar from '../../FundDiagnose/Common/EchartsCommonRadar'
import Rule from '../../FundDiagnose/Common/Rule'
import { getDevicePixelRatio } from '../../../utils/util'
import PropTypes from 'prop-types';

// import Rule from '../../FundDiagnose/Common/Rule'
import echarts from 'echarts/lib/echarts';
// import Echarts from 'echarts-for-react'

import $ from 'jquery';

const arr = function (value) {
  if (value < 60) {
    return "较差"
  } else if (value >= 60 && value < 70) {
    return "一般"
  } else if (value >= 70 && value < 80) {
    return "中等"
  } else if (value >= 80 && value < 90) {
    return "良好"
  } else {
    return "优异"
  }
}
const cx = classNames.bind(styles);
class ScorePk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleShow: ''
    }
    this.callRule = this.callRule.bind(this)
  }
  callRule(value) {
    const { callback } = this.props
    callback('show')
    if (value === 'show') {
      this.setState({
        ruleShow: 'flex'
      })
    }
    $('#nonius').animate({ left: '0' }, 500)
  }
  closeFather(value) {
    $('#nonius').animate({ left: '3.5rem' }, 300, () => {
      if (value === 'none') {
        this.setState({
          ruleShow: 'none'
        })
      }
    })
  }
  componentDidMount(){
    this.charts()
  }
  componentWillUpdate(){
    this.charts()

  }
  charts(){
    const dpr = getDevicePixelRatio()

    const one = [72, 93, 67, 82, 65]
    const two = [93, 91, 87, 89, 78]
    let indicator = [
      { name: "历史业绩", max: 100 },
      { name: "风控能力", max: 100 },
      { name: "基金经理", max: 100 },
      { name: "基金公司", max: 100 },
      { name: "盈利潜力", max: 100 },]
    let myChartp = echarts.init(document.getElementById('mainl'))
    // 绘制图表
    myChartp.setOption({
      backgroundColor: '#fff',
      grid: {
        x: '7%', y: '19%', width: '38%', height: '3rem'
        // width: '0%',
        // height: '0%'
      },
      radar: {
        indicator: indicator,
        shape: 'circle',
        splitNumber: 5,
        name: {
          formatter: function (data, indicator) {
            if (data == "历史业绩") {
              return '{gray|' + data + '}\n{deepY|' + arr(one[0]) + '}{deepB|/' + arr(two[0]) + '}';
            }
            if (data == "盈利潜力") {
              return '{gray|' + data + '}\n{deepY|' + arr(one[1]) + '}{deepB|/' + arr(two[1]) + '}';
            }
            if (data == "基金公司") {
              return '{gray|' + data + '}\n{deepY|' + arr(one[2]) + '}{deepB|/' + arr(two[2]) + '}';
            }
            if (data == "基金经理") {
              return '{gray|' + data + '}\n{deepY|' + arr(one[3]) + '}{deepB|/' + arr(two[3]) + '}';
            }
            if (data == "风控能力") {
              return '{gray|' + data + '}\n{deepY|' + arr(one[4]) + '}{deepB|/' + arr(two[4]) + '}';
            }
          },
          rich: {
            gray: {
              color: '#6E7175',
              fontSize: 11 * dpr,
              align: 'center',
              lineHeight: 16 * dpr
            },
            deepY: {
              color: '#FF7818',
              fontSize: 12 * dpr,
              align: 'center',
              fontFamily: "PingFangSC-Medium",
              color: "#B08440",
            },
            deepB: {
              color: '#FF7818',
              fontSize: 12 * dpr,
              align: 'center',
              fontFamily: "PingFangSC-Medium",
              color: "#72819A",
            }
          },
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
          data: [
            {
              value: one,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#EDB500', // 图表中各个图区域的边框线颜色,
                    width: 2 * dpr
                  },
                  areaStyle: {
                    type: 'default',
                    opacity: 1, // 图表中各个图区域的透明度
                    color: "rgba(255,175,0,0.10)" // 图表中各个图区域的颜色
                  }
                }
              },
            },
            {
              value: two,
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#ACBCD6',// 图表中各个图区域的边框线颜色
                    width: 2 * dpr
                  },
                  areaStyle: {
                    type: 'default',
                    opacity: 1,
                  },
                  color: "rgba(114,129,154,0.06)",
                }
              },
            }],
          symbol: 'none',

        }

      ]
    })
  }
  render() {
    return (

      <SectionContainer titleType="text" sectionTitle="评分对比" sectionTitleIconSrc="Common/score-pk.png" rightSideType="only">
        <div className={cx('scorePk')}>
          <p><span>72</span><span>vs</span><span>88</span></p>
          <div id="mainl" className={cx("echartTest")} style={{ width:"103%", height: "3rem"}}  ></div>

          {/* <Echarts style={{ width: '103%', height: "510%", top: '0.1rem', marginTop: "0.1rem" }} option={option} /> */}
          <Rule func={this.callRule} top="0.55rem" />
        </div>
      </SectionContainer>
    )
  }
}
ScorePk.propTypes = {
  one: PropTypes.array,
  two: PropTypes.array,
}
export default ScorePk;
