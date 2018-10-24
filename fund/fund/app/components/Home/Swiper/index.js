import React, { Component } from 'react'
import styles from './styles.css';
import classNames from 'classnames/bind';
import ReactSwipe from 'react-swipe';
import { getDevicePixelRatio } from '../../../../utils/util'

import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';

HighchartsMore(ReactHighcharts.Highcharts)
SolidGauge(ReactHighcharts.Highcharts)


const cx = classNames.bind(styles);


class Swiper extends Component {
  getChartsConfig() {
    const ratio = getDevicePixelRatio()
    return {
        chart: {
            type: 'solidgauge',
            height: '120%',
            margin: [0,0,0,0],
        },
        credits: {
            enabled: false
        },
        title: {
          text: '较高',
          style: {
            fontSize: '0.16rem',
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
          y: 18 * ratio
        },
        tooltip: {
            enabled: false
        },
        exporting: {
            enabled: false
        }, 
        pane: {
            startAngle: 0,
            endAngle: 360,
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
  render() {
    const config = this.getChartsConfig();

    return (
      <ReactSwipe className={cx("carousel")} swipeOptions={{ continuous: false }}>
        <div className={cx("list")}>
          <div className={cx('swiper-list')}>
            <div className={cx('list-title')}>
              <div className={cx('list-title-pie')}><ReactHighcharts config={config}></ReactHighcharts></div>
              <div className={cx('list-title-message')}>
                <p>富国中证红利增强</p>
                <p>FB000001</p>
                <p><span>适合您的估值偏好</span></p>
              </div>
            </div>
            <div className={cx('list-content')}>
              <div className={cx('list-content-top')} >
                <div className={cx('list-content-top-rate')}>
                  <div className={cx('list-content-top-rate-left')}>
                    <p>8.90%</p>
                    <p>历史年化收益率</p>
                  </div>
                  <div className={cx('list-content-top-rate-right')}>这是个折线图</div>
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

        </div>
        <div className={cx("list")}>
          <div className={cx('swiper-list')}>
            <div className={cx('list-title')}>
              <div className={cx('list-title-pie')}><ReactHighcharts config={config}></ReactHighcharts></div>
              <div className={cx('list-title-message')}>
                <p>富国中证红利增强</p>
                <p>FB000001</p>
                <p><span>适合您的估值偏好</span></p>
              </div>
            </div>
            <div className={cx('list-content')}>
              <div className={cx('list-content-top')} >
                <div className={cx('list-content-top-rate')}>
                  <div className={cx('list-content-top-rate-left')}>
                    <p>8.90%</p>
                    <p>历史年化收益率</p>
                  </div>
                  <div className={cx('list-content-top-rate-right')}>这是个折线图</div>
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

        </div>
        <div className={cx("list")}>
          <div className={cx('swiper-list')}>
            <div className={cx('list-title')}>
              <div className={cx('list-title-pie')}><ReactHighcharts config={config}></ReactHighcharts></div>
              <div className={cx('list-title-message')}>
                <p>富国中证红利增强</p>
                <p>FB000001</p>
                <p><span>适合您的估值偏好</span></p>
              </div>
            </div>
            <div className={cx('list-content')}>
              <div className={cx('list-content-top')} >
                <div className={cx('list-content-top-rate')}>
                  <div className={cx('list-content-top-rate-left')}>
                    <p>8.90%</p>
                    <p>历史年化收益率</p>
                  </div>
                  <div className={cx('list-content-top-rate-right')}>这是个折线图</div>
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

        </div>
      </ReactSwipe>
    );
  }

}
export default Swiper

