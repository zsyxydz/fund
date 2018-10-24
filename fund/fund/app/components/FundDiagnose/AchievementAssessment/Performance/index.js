import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import SectionContainer from '../../../Common/SectionContainer'
import {getId} from '../../../../utils/util'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
class Performances extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const id = getId(this.props)
        const yjgy = require("../../../../../resource/yjgy")
        const newData = yjgy[id]
        return (
            <SectionContainer titleType="text" sectionTitle="业绩指标" sectionTitleIconSrc="Achievement/Ach-zb.png" >
                {

                        <div className={cx('performance')}>
                            <div className={cx('performance-top', 'clearfix')}>
                                <div className={cx('performance-top-one')}>
                                    <p>收益率</p>
                                    <p className={cx(newData.target.rate.val>0?'r-bg':'blue-bg')}>{newData.target.rate.val}%</p>
                                    <p><span>{newData.target.rate.title}</span></p>
                                </div>
                                <div className={cx('performance-top-two')}>
                                    <p>年化收益率</p>
                                    <p className={cx(newData.target.yearRate.val>0?'r-bg':'blue-bg')}>{newData.target.yearRate.val}%</p>
                                    <p><span>{newData.target.yearRate.title}</span></p>
                                </div>
                            </div>
                            <div className={cx('performance-bottom', 'clearfix')}>
                                <div className={cx('performance-top-one')}>
                                    <p>波动率</p>
                                    <p className={cx('b-bg')}>{newData.target.fluctuation.val}</p>
                                    <p><span>{newData.target.fluctuation.title}</span></p>
                                </div>
                                <div className={cx('performance-top-two')}>
                                    <p>夏普比率</p>
                                    <p className={cx('b-bg')}>{newData.target.sharpe.val}</p>
                                    <p><span>{newData.target.sharpe.title}</span></p>
                                </div>
                                <div className={cx('performance-top-two')}>
                                    <p>最大回撤</p>
                                    <p className={cx('b-bg')}>{newData.target.retreat.val}</p>
                                    <p><span>{newData.target.retreat.title}</span></p>
                                </div>
                            </div>
                        </div>

                }

            </SectionContainer>


        )
    }
}
Performances.PropTypes={
    data:PropTypes.object
}

export default Performances