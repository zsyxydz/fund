import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Link } from "react-router-dom"
import styles from './styles.css';

const cx = classNames.bind(styles);

class Products extends Component {
  constructor(props){
    super(props)
    this.state={
      time:false
    }
  }
  componentWillMount(){
    let _this = this
    const { allFundData } = this.props
    setTimeout(()=>{_this.setState({
      time : true
    })},300)
  }
  render() {
    const { allFundData } = this.props
    const { time } = this.state
    return (
      <div className={cx('products-box')}>
        <ul>
          {
            Object.keys(allFundData).map(i => {
              return <Link to={{pathname:'/detail/'+i,query:i}} key = {i}>
                <li className={cx('products-list', 'clearfix')}>
                  <div className={cx('products-list-left')}>
                    <p>{time?allFundData[i].rate:"0.00%"}</p>
                    {/* <p>{time}</p> */}
                    <p>近一年收益率</p>
                  </div>
                  <div className={cx('products-list-right')}>
                    <p><span>{allFundData[i].fund_info.fund_name}</span><img src={i == 'fd100032'?'../../../images/Common/icon_best@3x.png':i == 'fd000011'?'../../../images/Common/icon_hot@3x.png':'../../../images/Common/icon_score@3x.png'}></img></p>
                    <p><span className={cx('blue-light')}>{allFundData[i].fund_info.fund_class}</span><span className={cx('blue-light')}>{allFundData[i].fund_info.fund_risk}</span></p>
                    <p>基金评分：<span>{allFundData[i].fund_scores.total_own_score}</span>购买人数：<span>{allFundData[i].buy_person}</span></p>
                  </div>
                  <div className={cx('products-list-bottom')}>
                    <img src='../../../images/Common/icon_manager_man@2x.png' />
                    
                    <div className={cx('word')}>{allFundData[i].inc}<span></span></div>
                  </div>
                </li>
              </Link>
            })
          }
         
        </ul>
      </div>
    )
  }
}
Products.propTypes = {
  allFundData: PropTypes.object,

}

Products.defaultProps = {
  allFundData: {},



}
export default Products;