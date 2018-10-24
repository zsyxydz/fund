
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../Common/SectionContainer'



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

    return (

      <SectionContainer titleType="text" sectionTitle="基本对比" sectionTitleIconSrc="Common/base-pk@2x.png" rightSideType="only">
        <div className={cx('basePk')}>
          <ul>
            <li><span>10元起购</span><span>起购金额</span><span>10元起购</span></li>
            <li><span>1.5%</span><span>手续费</span><span>1.0%</span></li>
            <li><span>低风险</span><span>风险评级</span><span>高风险</span></li>
            <li><span>股票型</span><span>类型</span><span>债券型</span></li>
            <li><span>22.16亿元</span><span>基金规模</span><span>12.16亿元</span></li>
            <li><span>2003.03.05</span><span>成立时间</span><span>2004.03.05</span></li>
          </ul>
        </div>
      </SectionContainer>
    )
  }
}
export default PerformancePk;
