import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
class Power extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={cx('power')}>
                <ul className={cx('clearfix')}>
                    <li><span><span><span>4.33%</span></span></span><span><span><span>3.24%</span></span></span><span><span><span>3.02%</span></span></span></li>
                </ul>
                <p><span>上涨超<span>3%</span></span></p>
                <p className={cx('illustrate')}>成立以来，沪深300单日涨幅超过3%的交易日算数平均</p>

            </div>
        )
    }
}


export default Power