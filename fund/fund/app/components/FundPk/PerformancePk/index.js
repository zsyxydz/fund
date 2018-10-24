
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../Common/SectionContainer'

import {getId} from '../../../utils/util'


const cx = classNames.bind(styles);
class PerformancePk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onTabChangeCommon = this.onTabChangeCommon.bind(this)
  }
  onTabChangeCommon(value) {
    console.log(value)
  }
  render() {
    const fundId = getId(this.props)
    let double = []
    const doubleData = require('../../../../resource/yjgy')
    double = fundId.split('vs')
    let renderData1 = doubleData[double[0]]
    let renderData2 = doubleData[double[1]]
    return (
      <SectionContainer titleType="text" sectionTitle="业绩对比" onTabChanged={this.onTabChangeCommon} sectionTitleIconSrc="Achievement/Ach-gy.png" rightSideType="only" rightSideValues={["近一年", "近三年", "全部"]}>
        <div className={cx('performancePk')}>
          <ul>
            <li><span><span>{renderData1.target.rate.val}%</span><span className={cx('tag-'+renderData1.target.rate.color)}>{renderData1.target.rate.title}</span></span><span>收益率</span><span><span>{renderData2.target.rate.val}%</span><span className={cx('tag-'+renderData2.target.rate.color)}>{renderData2.target.rate.title}</span></span></li>
            <li><span><span>{renderData1.target.yearRate.val}%</span><span className={cx('tag-'+renderData1.target.yearRate.color)}>{renderData1.target.yearRate.title}</span></span><span>年化收益率</span><span><span>{renderData2.target.yearRate.val}%</span><span className={cx('tag-'+renderData2.target.yearRate.color)}>{renderData2.target.yearRate.title}</span></span></li>
            <li><span><span>{renderData1.target.fluctuation.val}</span><span className={cx('tag-'+renderData1.target.fluctuation.color)}>{renderData1.target.fluctuation.title}</span></span><span>波动率</span><span><span>{renderData2.target.fluctuation.val}</span><span className={cx('tag-'+renderData2.target.fluctuation.color)}>{renderData2.target.fluctuation.title}</span></span></li>
            <li><span><span>{renderData1.target.sharpe.val}</span><span className={cx('tag-'+renderData1.target.sharpe.color)}>{renderData1.target.sharpe.title}</span></span><span>夏普比率</span><span><span>{renderData2.target.sharpe.val}</span><span className={cx('tag-'+renderData2.target.sharpe.color)}>{renderData2.target.sharpe.title}</span></span></li>
            <li><span><span>{renderData1.target.retreat.val}</span><span className={cx('tag-'+renderData1.target.retreat.color)}>{renderData1.target.retreat.title}</span></span><span>最大回撤</span><span><span>{renderData2.target.retreat.val}</span><span className={cx('tag-'+renderData2.target.retreat.color)}>{renderData2.target.retreat.title}</span></span></li>
            <li><span><span>{renderData1.target.style.val}%</span><span className={cx('tag-'+renderData1.target.style.color)}>{renderData1.target.style.title}</span></span><span>风格配置</span><span><span>{renderData2.target.style.val}%</span><span className={cx('tag-'+renderData2.target.style.color)}>{renderData2.target.style.title}</span></span></li>
            <li><span><span>{renderData1.target.industry.val}%</span><span className={cx('tag-'+renderData1.target.industry.color)}>{renderData1.target.industry.title}</span></span><span>行业配置</span><span><span>{renderData2.target.industry.val}%</span><span className={cx('tag-'+renderData2.target.industry.color)}>{renderData2.target.industry.title}</span></span></li>
            <li><span><span>{renderData1.target.time.val}%</span><span className={cx('tag-'+renderData1.target.time.color)}>{renderData1.target.time.title}</span></span><span>择时能力</span><span><span>{renderData2.target.time.val}%</span><span className={cx('tag-'+renderData2.target.time.color)}>{renderData2.target.time.title}</span></span></li>
          </ul>

        </div>
      </SectionContainer>

    )
  }
}
export default PerformancePk;
