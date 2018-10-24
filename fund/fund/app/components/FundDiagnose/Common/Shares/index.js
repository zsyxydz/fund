import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import Rule from '../Rule';
import {getId} from '../../../../utils/util'


const cx = classNames.bind(styles);
const allFundData = require('../../../../../resource/alldata')

class Shares extends Component {
  render() {
    const data = {
      "fund_info": {
        "fund_name": "富国中证红利指数增强",
        "fund_code": "100032",
        "fund_class": "指数型",
        "fund_risk": "中风险",
        "matching_degree": "高"
      }
    }
    const { info, more, isShowBack, isShowPKBtn, icon ,FatherData} = this.props;
    const icons = require(`../../../../images/Common/${icon}`)
    const id = getId(this.props)

    return (
      <div className={cx("s_shares")}>
        <div className={cx("shares_name")}>{allFundData[id].fund_info.fund_name}</div>
        <div className={cx("shares_introduce")}>
          <span>{allFundData[id].fund_info.fund_code}<span></span></span>
          
          <span>{allFundData[id].fund_info.fund_class}</span>
          <span><img className={cx('back-icon')} src={icons}></img><span className={cx('height')} >{allFundData[id].fund_info.fund_risk}</span></span>
        </div>
      </div>

    )
  }
}

Shares.propTypes = {
  info: PropTypes.string,
  icon: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  FatherData:PropTypes.object
}

Shares.defaultProps = {
  info: "您与该产品存在较高的匹配度",
  icon: "",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true,
  FatherData:{}
}

export default Shares;