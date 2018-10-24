import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import $ from '../../../../lib/jquery/dist/jquery'


const cx = classNames.bind(styles);

class Shares extends Component {
    constructor(props) {
        super(props)
        this.state={
            ruleShow:''
        }
        this.close = this.close.bind(this);
    }
    
    close() {
        const {closeFather} = this.props
        
        closeFather("none")

    }


    render() {
        const { display } = this.props
        return (
            <div id={cx('nonius')} className={cx("ruleContentBox")} style={{ 'height': window.innerHeight, 'display': display  }} >
                <div className={cx("ruleContent")}>
                    <div className={cx('ruleTitle')}>
                        <span >打分规则</span>
                        <a><img onClick={this.close} src='../../images/Common/back_black@2x.png' /></a>
                    </div>
                    <div className={cx('ruleInc')}>
                        <ul>
                            <li>
                                <p>历史业绩</p>
                                <div>根据基金过去不同时期的业绩指标，反应其在不同市场行情下的收益能力，找到能够长期跑赢市场的优秀基金</div>
                            </li>
                            <li>
                                <p>风控能力</p>
                                <div>根据该基金产生的最大亏损幅度，体现其抗风险的能力</div>
                            </li>
                            <li>
                                <p>基金经理</p>
                                <div>根据该基金经理的从业年限，管理规模，任职以来收益来衡量该基金经理人的综合能力</div>
                            </li>
                            <li>
                                <p>基金公司</p>
                                <div>根据该基金公司的注册资本，管理规模，业绩增长和基金经理平均从业年限来衡量基金公司的实力</div>
                            </li>
                            <li>
                                <p>盈利潜力</p>
                                <div>根据该基金擅长行情，压力测试与动力测试，并结合近一年内不同时间周期的盈亏，衡量基金盈利潜力</div>
                            </li>
                        </ul>
                        <div className={cx('rule-bottom')}>
                            <p><img src="../../images/Common/icon@2x.png" />通过基金评价将基金分为五个等级</p>
                            <div className={cx('score')}>
                                <ul className={cx('score-img', 'clearfix')}>
                                    <li><img src="../../images/Common/lv5@2x.png" /></li>
                                    <li><img src="../../images/Common/lv4@2x.png" /></li>
                                    <li><img src="../../images/Common/lv3@2x.png" /></li>
                                    <li><img src="../../images/Common/lv2@2x.png" /></li>
                                    <li><img src="../../images/Common/lv1@2x.png" /></li>
                                </ul>
                                <ul className={cx('score-word', 'clearfix')}>
                                    <li><span>较差</span><span>60分以下</span></li>
                                    <li><span>一般</span><span>60分-70分</span></li>
                                    <li><span>中等</span><span>70分-80分</span></li>
                                    <li><span>良好</span><span>80分-90分</span></li>
                                    <li><span>优异</span><span>90分-100分</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

Shares.propTypes = {
    closeFather: PropTypes.func
}

Shares.defaultProps = {

}

export default Shares;