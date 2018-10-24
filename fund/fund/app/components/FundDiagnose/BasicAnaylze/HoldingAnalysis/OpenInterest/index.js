import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';


const cx = classNames.bind(styles);

class OpenInterest extends Component {
  render() {
    const { fundData} = this.props;
    const data =fundData.fund_position.asset_type
    // const data = {
      
    //     "data": [
    //       {
    //         "date": "2018-06-30",
    //         "type": "股票",
    //         "percent": 0.8433
    //       },{
    //         "date": "2018-06-30",
    //         "type": "货币资金",
    //         "percent": 0.1008
    //       },{
    //         "date": "2018-06-30",
    //         "type": "买入返售证券",
    //         "percent": 0.0503
    //       },{
    //         "date": "2018-06-30",
    //         "type": "其它资产",
    //         "percent": 0.0056
    //       }
    //     ]
      
    // }
    const { info, more, isShowBack, isShowPKBtn } = this.props;
    let index = 0
    const rendetArr = []
    const list ={}
    for (let i = 0; i < data.data.length; i++) {
      const element = data.data[i];
      list[element.type] = {
        name:element.type,
        width:(element.percent*100).toFixed(2)+"%"
      }
    }
    let cssWidth = {}
    for (let i in list) {
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
       
      </div>
    )
  }
}

OpenInterest.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  fundData:PropTypes.object

}

OpenInterest.defaultProps = {
  info: "您与该产品存在较高的匹配度",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true
}

export default OpenInterest;