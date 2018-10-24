import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const cssHeights = {
            one: [80, 100, 100],
            two: [30, 55, 55],
            three: [55, 35, 35],
        }
        let list = []
        let lists = []
        // const cssHeight = {
        //     height:cssHeights
        // }
        for (let i in cssHeights) {
            list.push(<li className={cx('top', 'clearfix')} key={i}><div><div><span style={{ 'height': cssHeights[i][0] + "%" }}></span></div><div><span style={{ 'height': cssHeights[i][1] + "%" }}></span></div><div><span style={{ 'height': cssHeights[i][2] + "%" }}></span></div></div></li>)
            lists.push(<li className={cx('top', 'clearfix')} key={i + '1'}><div><span style={{ 'height': cssHeights[i][0] + "%" }}></span></div><div><span style={{ 'height': cssHeights[i][1] + "%" }}></span></div><div><span style={{ 'height': cssHeights[i][2] + "%" }}></span></div></li>)
        }

        return (
            <div className={cx('market')}>
                <ul className={cx('top', 'clearfix')}>
                    <li className={cx('one')}>
                        <div>
                            <div>
                                
                                <span className={cx('zhu')}><span className={cx('num')}>3.5%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>5.1%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>1.2%</span></span>
                            </div>
                        </div>
                    </li>
                    <li className={cx('two')}>
                        <div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>1.5%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>2.0%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>0.8%</span></span>
                            </div>
                        </div>
                    </li>
                    <li className={cx('three')}>
                        <div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>-1.0%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>-2.8%</span></span>
                            </div>
                            <div>
                                <span className={cx('zhu')}><span className={cx('num')}>-2.1%</span></span>
                            </div>

                        </div>
                    </li>
                    {/* <li className={cx('top','clearfix')}><div><div><span style={{ 'height': 67 + "%" }}></span></div><div><span style={{ 'height': 50 + "%" }}></span></div><div><span style={{ 'height': 100 + "%" }}></span></div></div></li> */}
                </ul>
                <p><span>上涨市</span><span>震荡市</span><span>下跌市</span></p>

            </div>
        )
    }
}


export default Market