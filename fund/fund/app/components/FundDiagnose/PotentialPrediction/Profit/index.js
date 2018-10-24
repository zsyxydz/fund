import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
class Profit extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const {data} = this.props
        const sss=data
        // const sss = {
        //     // "thirty":{
        //         "profit_rate":{
        //            'name':'盈利概率',     
        //           'profit':'43.25%',
        //           'z05':'23.81%',
        //           'z510':'53.47%',
        //           'z10':'70.38%',
        //         },
        //         "loss_rate":{
        //            'name':'亏损概率',     

        //           'profit':'56.75%',
        //           'z05':'23.81%',
        //           'z510':'53.47%',
        //           'z10':'70.38%',
        //         },
        //     //   },
        // }
        const list = []
        for(let i in sss){}
        return (
            <div className={cx('Profit')}>
                <div className={cx('Profit-days', 'clearfix')}>
                <div className={cx('Profit-left-box')}>
                        <div className={cx('Profit-left')}>
                            <div className={cx('Profit-title')}><span>{sss.profit_rate.name}</span><span>{sss.profit_rate.profit}</span></div>
                            <div className={cx('Profit-content')}>
                                <div><p className={cx('clearfix')}><span>0至+5%</span><span>{sss.profit_rate.z05}</span></p></div>
                                <div><p className={cx('clearfix')}><span>+5%至+10%</span><span>{sss.profit_rate.z510}</span></p></div>
                                <div><p className={cx('clearfix')}><span>+10%以上</span><span>{sss.profit_rate.z10}</span></p></div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('Profit-right-box')}>
                        <div className={cx('Profit-right')}>
                            <div className={cx('Profit-title')}><span>{sss.loss_rate.name}</span><span>{sss.loss_rate.profit}</span></div>
                            <div className={cx('Profit-content')}>
                                <div><p className={cx('clearfix')}><span>0至+5%</span><span>{sss.loss_rate.z05}</span></p></div>
                                <div><p className={cx('clearfix')}><span>5%至+10%</span><span>{sss.loss_rate.z510}</span></p></div>
                                <div><p className={cx('clearfix')}><span>+10%以上</span><span>{sss.loss_rate.z10}</span></p></div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <p>统计近一年内任意交易日买入并持有该基金达到一定的时长的盈利状况，评估基金的未来盈利潜力。</p>
            </div>
        )
    }
}
Profit.PropTypes={
    data:PropTypes.array
}

export default Profit