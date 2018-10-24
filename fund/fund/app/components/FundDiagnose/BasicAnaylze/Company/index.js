import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../../Common/SectionContainer'


const cx = classNames.bind(styles);

class Company extends Component {
  render() {
    const datass = this.props.data
    const data = datass.basic_analyze
    
    // {
    //   "fund_company": {
    //     "registered_capital": {
    //       "this": 5.20,
    //       "average": 1.1
    //     },
    //     "manage_scale": {
    //       "this": 2099.51,
    //       "average": 1398
    //     },
    //     "manage_count": {
    //       "this": 164,
    //       "average": 85
    //     },
    //     "period_of_operation": {
    //       "this": 3.63,
    //       "average": 2.89
    //     },
    //     "tag": {
    //       "tag_caital": "实力雄厚",
    //       "tag_cout": "规模庞大",
    //       "tag_operation": "经验丰富"
    //     }
    //   },
    // }

    return (
      <SectionContainer titleType="text" sectionTitle="基金公司" sectionTitleIconSrc="OpenInterest/company@3x.png" rightSideType="only" >
      <div className={cx("Company")}>
        <ul>
            <li className={cx("Company-title")}><span></span><span>本基金</span><span>平均</span></li>
            <li><span>注册资本</span><span>{data.fund_company.registered_capital.this}亿元</span><span>{data.fund_company.registered_capital.average}亿元</span></li>
            <li><span>管理规模</span><span>{data.fund_company.manage_scale.this}亿元</span><span>{data.fund_company.manage_scale.average}亿元</span></li>
            <li><span>旗下基金管理</span><span>{data.fund_company.manage_count.this}只</span><span>{data.fund_company.manage_count.average}只</span></li>
            <li><span>团队平均从业年限</span><span>{data.fund_company.period_of_operation.this}年</span><span>{data.fund_company.period_of_operation.average}年</span></li>
        </ul>
        <div className={cx("FundScale-bottom")}>
            <div className={cx("shares_evaluate")}>
            公司<span className={cx("light")} style={{'color':data.fund_company.tag.tag_caital[1]==1?'#ff7818':data.fund_company.tag.tag_caital[1]==2?'#5b5b5b':'#1b88ee'}}>{data.fund_company.tag.tag_caital?data.fund_company.tag.tag_caital[0]:"实力bu雄厚"}</span>,管理<span style={{'color':data.fund_company.tag.tag_cout[1]==1?'#ff7818':data.fund_company.tag.tag_cout[1]==2?'#5b5b5b':'#1b88ee'}} className={cx("light")}>{data.fund_company.tag.tag_cout?data.fund_company.tag.tag_cout[0]:"实力bu雄厚"}</span>,团队<span style={{'color':data.fund_company.tag.tag_operation[1]==1?'#ff7818':data.fund_company.tag.tag_operation[1]==2?'#5b5b5b':'#1b88ee'}} className={cx("light")}>{data.fund_company.tag.tag_operation?data.fund_company.tag.tag_operation[0]:"实力bu雄厚"}</span>
          </div>
        </div>
      </div>
      </SectionContainer>

      
    )
  }
}

Company.propTypes = {
  info: PropTypes.string,
  more: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  data:PropTypes.object
}

Company.defaultProps = {
  info: "您与该产品存在较高的匹配度",
  more: "了解更多",
  isShowBack: true,
  isShowPKBtn: true
}

export default Company;