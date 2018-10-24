import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
import Treemap from './TreeMap';
import Treemap2 from './TreeMap2';
import {getId} from '../../../../utils/util'

const cx = classNames.bind(styles)
class Attrs extends Component {
    constructor(props) {
        super(props);
        this.callback = this.callback.bind(this)
        this.callback2 = this.callback2.bind(this)
    }


    callback(val) {
        const { loadingFunc } = this.props
        loadingFunc(val)

    }
    callback2(val) {
    }

    render() {
        const id = getId(this.props)
        const yjgy = require("../../../../../resource/yjgy")
        const newData = yjgy[id]
        const { data } = this.props
        let listTop = []
        let colorBlue = {}
        let colorOr = {}
        let widthCss = {
            width: 100 + '%'
        }
        let zero = {
            width: 0 + '%'
        }
        let ss = {
            color: 'rgb(110,113,117)',
            background: 'rgb(247,247,247)'
        }
        let ss2 = {
            color: 'rgb(255,122,57)',
            background: 'rgb(255,243,226)'
        }
        let ss3 = {
            color: '#58AEFF',
            background: '#E9F5FF'
        }

        let styles=[]

        newData.attribution.items.forEach((element) => {
            let treeData = {
            }
            treeData.child={}
            element.contibution_item&&element.contibution_item.forEach(k =>{
                treeData.child[k.name] = k.value

            })
            widthCss = {
                width: (Math.abs(element.profit_rate * 100).toFixed(2) < 5 ? Math.abs(element.profit_rate * 100).toFixed(2) * 5 : Math.abs(element.profit_rate * 100).toFixed(2) * 2) + "%",
            }
            colorBlue = {
                color: '#58AEFF',
                left: '-0.5rem'
            }
            colorOr = {
                color: '#FF7818',
                right: '-0.45rem'
            }
            listTop.push(
                <p key={element.kind} className={cx('clearfix')}>
                    <span >{element.kind == 'style' ? '风格' : element.kind == 'time' ? '时间' : '行业'}</span>
                    <span className={cx('bg-left')} >
                        <span className={cx('data-left')} style={element.profit_rate < 0 ? widthCss : zero}>
                            <span className={cx('data-left-number')} style={element.profit_rate > -0.15 ? colorBlue : {}}>{element.profit_rate.toFixed(2) < 0 ? (element.profit_rate * 100).toFixed(2) + "%" : ''}</span>
                        </span>
                    </span>
                    <span className={cx('bg-right')}>
                        <span className={cx('data-right')} style={element.profit_rate > 0 ? widthCss : zero}>
                            <span className={cx('data-right-number')} style={element.profit_rate < 0.15 ? colorOr : {}}>{element.profit_rate.toFixed(2) > 0 ? (element.profit_rate * 100).toFixed(2) + "%" : ''}</span>
                        </span>
                    </span>
                </p>)




            styles.push(<div key={element.kind} className={cx('Attr-trade-page')}>
                <div className={cx('Attrs')}>
                    <p className={cx('clearfix')}>
                        <span className={cx('iconTest')}><img src={'../../../../images/Achievement/' + element.img} /></span>
                        <span>{element.name}收益率</span>
                        <span style={(element.profit_rate * 100).toFixed(2) > 0 ? { color: '#FF7818' } : { color: '#1B88EE' }}>{(element.profit_rate * 100).toFixed(2)}%</span>
                        <span style={(element.profit_rate * 100).toFixed(2) > 0 ? ss2 : ss3}>{(element.profit_rate * 100).toFixed(2) > 0 ? "较好" : "较差"}</span></p>
                       { element.contibution_item&&<div className={cx('height-tree')}>
                    <Treemap2 data={treeData} call={
                            this.callback
                        } name={"style"} />
                    </div>}
                    {element.kind == "time" ? <div className={cx('Attr-trade-page-ints')} >
                        本基金<attr style={(element.profit_rate * 100).toFixed(2) > 0 ? { color: '#FF7818' } : { color: '#58AEFF' }}>{element.name}{(element.profit_rate * 100).toFixed(2) > 0 ? "较好" : "较差"}</attr>,{element.diagnose.intro}
                    </div> : <div className={cx('Attr-trade-page-ints')} >
                            本基金<attr style={(element.profit_rate * 100).toFixed(2) > 0 ? { color: '#FF7818' } : { color: '#58AEFF' }}>{element.name}{(element.profit_rate * 100).toFixed(2) > 0 ? "较好" : "较差"}</attr>,{element.name}盈利top3是<span className={cx("yl")}>{element.diagnose.profit_top_list}</span>;{element.name}亏损top3的风格是<span className={cx("ks")}>{element.diagnose.loss_top_list}</span>。
                    </div>}
                </div>
            </div>)


        });


        return (
            <div className={cx('Attr', 'clearfix')}>
                <div className={cx('Attr-style-page')}>
                    <div className={cx('Attr-list')}>
                        {listTop}
                    </div>
                </div>
                {styles}

            </div>
        )
    }
}
Attrs.propTypes = {
    data: PropTypes.object,
    content: PropTypes.string,
    loadingFunc: PropTypes.func
}

export default Attrs