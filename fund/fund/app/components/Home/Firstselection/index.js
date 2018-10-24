import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { BrowserRouter as Router, Link } from "react-router-dom"
import styles from './styles.css';
import Swiper from 'react-id-swiper';

const cx = classNames.bind(styles);

class select extends Component {
  render() {
    var params = {
      // slidesPerView: 3,
      spaceBetween: 30,
      // width:1100,
      pagination: {
        // el: '.swiper-pagination',
        clickable: true,
      },
    }
    const icon = require('../../../images/homeIcon/cardBottom.png')
    return (
      <Swiper {...params}>
        <div className={cx('select-box')}>
          <div className={cx('select-child')}>
            <img className={cx('select-img')} src={icon} />
            <p className={cx('select-one')}>平安中正500联接A</p>
            <p className={cx('select-two')}><span>估值低位</span><span>盈利可期</span></p>
            <p className={cx('select-three')}><span>申购费：</span><span>1.0%</span></p>
          </div>
        </div>
        
        <div className={cx('select-box')}>
          <div className={cx('select-child')}>
            <img className={cx('select-img')} src={icon} />
            <p className={cx('select-one')}>嘉实资源精选</p>
            <p className={cx('select-two')}><span>估值低位</span><span>盈利可期</span></p>
            <p className={cx('select-three')}><span>申购费：</span><span>1.0%</span></p>
          </div>
        </div>
        <div className={cx('select-box')}>
          <div className={cx('select-child')}>
            <img className={cx('select-img')} src={icon} />
            <p className={cx('select-one')}>泰达泰和养老</p>
            <p className={cx('select-two')}><span>估值低位</span><span>盈利可期</span></p>
            <p className={cx('select-three')}><span>申购费：</span><span>1.0%</span></p>
          </div>
        </div>
        
      </Swiper>

    )
  }
}

export default select;