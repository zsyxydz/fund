import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import Tag from '../../Common/Tag'
import { getDevicePixelRatio } from '../../../utils/util'


HighchartsMore(ReactHighcharts.Highcharts)
SolidGauge(ReactHighcharts.Highcharts)

const cx = classNames.bind(styles);

class UserHeader extends Component {
  constructor(props) {
    super(props);
    this.getChartsConfig = this.getChartsConfig.bind(this);
  }

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
    
    const tagItems = ["激进型", "近期小幅亏损", "买过股票", "买过理财", "偏好场外基金与理财"]

    const tagNodes = [];
    for (let i in tagItems) {
      tagNodes.push(<Tag className={cx('tag-item')} key={"tag" + i} text={tagItems[i]} />);
    }

    return (
      <div className={cx('content-box')}>
        <span className={cx('charts-container')}>
          <ReactHighcharts config={config}></ReactHighcharts> 
        </span>
        <div className={cx('text-tag-area')}>
          <div className={cx('wel-text')}>Hi，张先生您好</div>
          <div className={cx('tag-area')}>
            {tagNodes}
          </div>
        </div>
      </div>
    );
  }
}

export default UserHeader;