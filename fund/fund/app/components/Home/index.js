import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.less';
import NavigationBar from '../Common/NavigationBar';
import SectionContainer from '../Common/SectionContainer';
import Products from './Products';
import ProductsStrategy from './Strategy';
import Firstselection from './Firstselection';
import { BrowserRouter as Router, Link } from "react-router-dom"
import $ from '../../lib/jquery/dist/jquery'
import Swiper from 'react-id-swiper';
import { getDevicePixelRatio } from '../../utils/util'
import ReactLoading from "react-loading";
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
HighchartsMore(ReactHighcharts.Highcharts)
SolidGauge(ReactHighcharts.Highcharts)


const cx = classNames.bind(styles);
const ratio = getDevicePixelRatio()
const allFundData = require('../../../resource/alldata')
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thisId: '',
      ttt: ''
    }
  }
  getChartsConfig() {
    return {
      chart: {
        type: 'solidgauge',
        height: '170%',
        margin: [0, 0, 0, 0],
      },
      credits: {
        enabled: false
      },
      title: {
        text: '较高',
        style: {
          fontSize: '0.14rem',
          color: '#FB3503'
        },
        verticalAlign: 'middle'
      },
      subtitle: {
        text: '匹配度',
        style: {
          fontSize: '0.11rem',
          color: '#AAAAAA'
        },
        verticalAlign: 'middle',
        y: 12 * ratio
      },
      tooltip: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      pane: {
        startAngle: 180,
        endAngle: 550,
        size: '75%',
        background: [{
          outerRadius: '127%',
          innerRadius: '104%',
          backgroundColor: '#F2F2F2',
          borderWidth: '0'
        }]
      },
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
      plotOptions: {
        solidgauge: {
          borderWidth: '0.08rem',
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [{
        name: '匹配度',
        borderColor: {
          radialGradient: {
            cx: 0.5,
            cy: 0,
            r: 1
          },
          stops: [
            [0, '#FFA339'],
            [1, '#FF491D']
          ]
        },
        data: [{
          color: '#FF7818',
          radius: '115%',
          innerRadius: '115%',
          y: 65
        }]
      }]
    }
  }
  componentDidMount() {
    let _this = this
    setTimeout(function () {
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
    }, 500)
    // $.ajax({
    //   url: "http://127.0.0.1:3002/test",
    //   type: 'get',
    //   dataType: 'jsonp',
    //   success: function (res) {
    //     console.log(1,res)
    //   },
    //   error: function (err) {
    //     console.log(1.5,err)
    //   }
    // })
    // fetch({url:"http://127.0.0.1:3002/test",method:"GET"})
    //   .then(response => console.log(2, response))
    //   .then(data => console.log(3, data)
    //   )
    //   .catch((error) => {
    //     console.log("ree",error);
    //   })







  }

  render() {
    const config = this.getChartsConfig();
    const { ttt } = this.state

    const params = {
      spaceBetween: 3,
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 1,
      coverflowEffect: {
        rotate: -10,
        stretch: 55,
        depth: 250,
        modifier: 1.2,
        slideShadows: false
      },
    }

    return (
      !ttt ? <div className={cx("loadingBox")}><ReactLoading type="spokes" color="#333" /></div> :
        <div className={cx('content')}>
          <NavigationBar title="首页" back={false} show={false} />
          <div className={cx('titleBox')}>
            <p>-智能匹配-</p>
            <p>客户诊断，精准推荐</p>
            <Swiper {...params} className={cx('sss')} >
              {
                Object.keys(allFundData).map(i => {
                  return <Link id={cx('list')} to={{ pathname: '/detail/' + i}} key={i} data-obj={i} onClick={this.params}>
                    <div className={cx('swiper-list')}>
                      <div className={cx('list-title')}>
                        <div className={cx('list-title-pie')}><ReactHighcharts config={config}></ReactHighcharts></div>
                        <div className={cx('list-title-message')}>
                          <p>{allFundData[i].fund_info.fund_name}</p>
                          <p>{allFundData[i].fund_info.fund_code}</p>
                          <p><span>适合您的估值偏好</span></p>
                        </div>
                      </div>
                      <div className={cx('list-content')}>
                        <div className={cx('list-content-top')} >
                          <div className={cx('list-content-top-rate')}>
                            <div className={cx('list-content-top-rate-left')}>
                              <p>{allFundData[i].rate}</p>
                              <p>历史年化收益率</p>
                            </div>
                            <div className={cx('list-content-top-rate-right')}>
                              <img src='../../images/Common/WechatIMG348.png'></img>
                            </div>
                          </div>
                          <div className={cx('list-content-tag')}>
                            <ul className={cx('clearfix')}>
                              <li>10元起购</li>
                              <li>混合基金</li>
                              <li>中风险</li>
                            </ul>

                          </div>
                        </div>
                        <div className={cx('buy')}><span>立即购买</span></div>

                      </div>
                    </div>
                  </Link>
                })
              }
            </Swiper>

          </div>
          <SectionContainer bg={false} noRightPadding={true} titleType="text" sectionTitle="首发精选" sectionTitleIconSrc="Home/sfjx@2x.png"><Firstselection /></SectionContainer>
          <SectionContainer bg={true} titleType="text" sectionTitle="精品推荐" sectionTitleIconSrc="Home/jxtj@2x.png"><Products allFundData={allFundData} /></SectionContainer>
          <SectionContainer bg={true} titleType="text" sectionTitle="基金策略" sectionTitleIconSrc="Home/jjcl@2x.png"><ProductsStrategy /></SectionContainer>
        </div>
    )
  }
}

export default Home;