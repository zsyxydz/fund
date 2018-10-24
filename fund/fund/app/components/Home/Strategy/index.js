import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Link } from "react-router-dom"
import styles from './styles.css';

const cx = classNames.bind(styles);

// const a2 = 'http://gl.mobile.stockpalm.com:8888/mobile/static/tactics-detail-react.html?sid=foundation-etf&title=%E4%BA%8C%E5%85%AB%E8%BD%AE%E5%8A%A8%E5%86%8D%E5%B9%B3%E8%A1%A1%E5%9F%BA%E9%87%91%E7%AD%96%E7%95%A5'
// const a1 = 'http://gl.mobile.stockpalm.com:8888/mobile/static/tactics-detail-react.html?sid=etf-trend&title=%E5%85%A8%E8%B5%84%E4%BA%A7%E8%B6%8B%E5%8A%BF%E5%86%8D%E5%B9%B3%E8%A1%A1%E5%9F%BA%E9%87%91%E7%AD%96%E7%95%A5'
class ProductsStrategy extends Component {
  linkTo() {
    window.location.href = a1
  }
  linkTo2() {
    window.location.href = a2
  }
  render() {
    const icon = require('../../../images/Common/icon_hot@3x.png')
    return (
      <div className={cx('products-box')}>
        <ul>

          <li className={cx('products-list', 'clearfix')} >
            <div className={cx('products-list-left')}>
              <p>10.26%</p>
              <p>近一年收益率</p>
            </div>
            <div className={cx('products-list-right')}>
              <p><span>全资产趋势再平衡</span><img/></p>
              <p><span className={cx('blue-light')}>全资产顺势</span><span className={cx('blue-light')}>中风险</span></p>
            </div>
          </li>
          <li className={cx('products-list', 'clearfix')} >
            <div className={cx('products-list-left')}>
              <p>4.01%</p>
              <p>近一年收益率</p>
            </div>
            <div className={cx('products-list-right')}>
              <p><span>二八轮动再平衡</span></p>
              <p><span className={cx('blue-light')}>大小盘轮动</span><span className={cx('blue-light')}>低风险</span></p>
            </div>
          </li>

        </ul>
      </div>
    )
  }
}

export default ProductsStrategy;