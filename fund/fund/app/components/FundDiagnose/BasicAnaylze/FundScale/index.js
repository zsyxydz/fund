import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../../Common/SectionContainer'


const cx = classNames.bind(styles);

class FundScale extends Component {
  
  render() {

    const ssdata = this.props.data
    const data = ssdata.basic_analyze.fund_scale
    
    // {
    //   "scale": {
    //     "this": 22.16,
    //     "average": 9.33
    //   },
    //   "scale_rank": {
    //     "this": 133,
    //     "average": 509
    //   },
    //   "tag": "较大"
    // }
    const {content} = this.props
    return (
      <SectionContainer titleType="text" sectionTitle="基金规模" sectionTitleIconSrc="OpenInterest/scale@3x.png" rightSideType="only">
      <div className={cx("FundScale")}>
        <div className={cx("FundScale-c", "clearfix")}>
          <div className={cx("FundScale-left",'clearfix')}>
            <p>基金规模</p>
            <p className={cx("middle",'clearfix')}><span><span className={cx('break')}>|</span><span className={cx("Fund-left")}>{data.scale.this}亿</span></span><span><span className={cx("Fund-right")}>{data.scale.average}亿</span></span></p>
            <p className={cx("middle",'clearfix')}><span><span className={cx('break')}>|</span><span>本基金</span></span><span><span>同类平均</span></span></p>
          </div>
          <div className={cx("FundScale-right",'clearfix')}>
            <p><span>基金规模排名</span></p>
            <p className={cx("middle",'clearfix')}><span><span className={cx('break')}>|</span><span className={cx("Fund-left")}>{data.scale_rank.this}</span></span><span><span className={cx("Fund-right")}>{data.scale_rank.average}</span></span></p>
            <p className={cx("middle",'clearfix')}><span><span className={cx('break')}>|</span><span>本基金</span></span><span><span>同类基金总数</span></span></p>
          </div>
        </div>

        <div className={cx("FundScale-bottom")}>
            <div className={cx("shares_evaluate")}>
            基金规模<span className={cx("light")} style={{'color':data.tag[1]==1?'#ff7818':data.tag[1]==2?'#5b5b5b':'#1b88ee'}}>{data.tag ? data.tag[0]:content}</span>
          </div>
        </div>
      </div>
      </SectionContainer>

      

    )
  }
}

FundScale.propTypes = {
  newComponents: PropTypes.element,
  content:PropTypes.string,
  data:PropTypes.object
}

FundScale.defaultProps = {
  newComponents: null,
  content:"较大"
}

export default FundScale;