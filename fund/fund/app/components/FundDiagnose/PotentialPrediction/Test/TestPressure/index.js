import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordIndex:'a'
        }
    }
    tabWord(lss){
        let _this= this
        console.log(lss)
        switch (lss) {
            case 'one':
            _this.setState({
                    wordIndex:'a'
                })
                break;
                case 'two':
                _this.setState({
                        wordIndex:'b'
                    })
                    break;
                    case 'three':
            _this.setState({
                    wordIndex:'c'
                })
                break;
            default:
                break;
        }
        
    }
    render() {
        const {wordIndex} = this.state
        let word={
            a:'2015.06-2015.08交易日涨跌幅的算术平均',
            b:'2016.01-2016.01交易日涨跌幅的算术平均',
            c:'自基金成立以来，沪深300单日跌幅超过3%的交易日算数平均',
        }
        return (
            <div className={cx('test')}>
                <p><span>15年股灾</span><span>16年熔断</span><span>跌幅超3%</span></p>
                <ul className={cx('clearfix')}>
                    <li onClick={()=>{this.tabWord('one')}} ><span style={{height:'90%'}}><label>-9.0%</label></span><span style={{height:'80%'}}><label>-8.0%</label></span><span style={{height:'70%'}}><label>-7.0%</label></span></li>
                    <li onClick={()=>{this.tabWord('two')}} ><span style={{height:'80%'}}><label>-8.0%</label></span><span style={{height:'90%'}}><label>-9.0%</label></span><span style={{height:'50%'}}><label>-5.0%</label></span></li>
                    <li onClick={()=>{this.tabWord('three')}} ><span style={{height:'65%'}}><label>-6.5%</label></span><span style={{height:'70%'}}><label>-7.0%</label></span><span style={{height:'60%'}}><label>-6.0%</label></span></li>
                </ul>
                <p className={cx('illustrate')}>{word[wordIndex]}</p>
            </div>
        )
    }
}


export default Test