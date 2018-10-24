import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';


const cx = classNames.bind(styles);

class IndustryPage extends Component {
  render() {
    const { fundData} = this.props;
    const data =fundData.fund_position.industry_type
    const { info, more, isShowBack, isShowPKBtn } = this.props;
    let index = 0
    const rendetArr = []
   
    const list =[]
    for (let i = 0; i < data.data.length; i++) {
      const element = data.data[i];
      list.push({
        name:element.industry,
        width:(element.percent*100).toFixed(2)+"%"
      })
    }
   
    let cssWidth = ''
    for (let i = 0; i < list.length; i++) {
      index++
      cssWidth = {width:list[i].width}
      rendetArr.push(<div className={cx('schedule', "bar-one")} key={index}>
      <p className={cx("clearfix")}><span>{list[i].name}</span><span>{list[i].width}</span></p>
      <div className={cx("box")}>
        <span className={cx("bar")} style={cssWidth}></span>
      </div>
    </div>)
    }
    return (
      <div className={cx("OpenInterest")}>
      {rendetArr}
        {/* <div className={cx('schedule', "bar-one")}>
          <p className={cx("clearfix")}><span>股票</span><span>{length.width}</span></p>
          <div className={cx("box")}>
            <span className={cx("bar")} style={length}></span>
          </div>
        </div>
        <div className={cx('schedule', "bar-two")}>
          <p className={cx("clearfix")}><span>股票</span><span>{length.width}</span></p>
          <div className={cx("box")}>
            <span className={cx("bar")} style={length}></span>
          </div>
        </div> */}
      </div>
    )
  }
}

IndustryPage.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  fundData:PropTypes.object

}

IndustryPage.defaultProps = {
  info: "您与该产品存在较高的匹配度",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true
}

export default IndustryPage;