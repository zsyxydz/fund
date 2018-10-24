import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import {getId} from '../../../../utils/util'
import queryString from "querystring"
const cx = classNames.bind(styles);


class Prompt extends Component {
  constructor(props) {
    super(props)
    this.toMatch = this.toMatch.bind(this)
  }
  toMatch() {
    const id = getId(this.props)
    window.location.href = "/#/match/" + id
  }
  render() {
    const allFundData = require('../../../../../resource/alldata')
    const data = {
      "fund_info": {
        "fund_name": "富国中证红利指数增强",
        "fund_code": "100032",
        "fund_class": "指数型",
        "fund_risk": "中风险",
        "matching_degree": "高"
      }
    }
    const { more } = this.props;
    const id =getId(this.props)
    return (
      <div className={cx('prompt')} >
        <div><span className={cx("prompt-left")}>您与该产品存在<span className={cx("light")}>较{allFundData[id].fund_info.matching_degree}</span>的匹配度</span>
          <div onClick={this.toMatch.bind(this)} className={cx("prompt-right", "bg-c")}>{more}</div>
        </div>
      </div>

    )
  }
}

Prompt.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  point: PropTypes.string,
  id: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  FatherData: PropTypes.object
}

Prompt.defaultProps = {
  info: "",
  point: '',
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true,
  FatherData: {}
}

export default Prompt;