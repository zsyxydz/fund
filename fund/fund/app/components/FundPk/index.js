
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import NavigationBar from '../Common/NavigationBar'
import PropTypes from 'prop-types';
import SectionContainer from '../Common/SectionContainer'
import PerformancePk from './PerformancePk'
import Edit from './EditFundName'
import ReactLoading from "react-loading";
import BasePk from './BasePk'
import ScorePk from './ScorePk'
import FundEcharts from './FundEcharts'
import Analyze from './Analyze'
import Rulecontent from '../FundDiagnose/Common/RuleContent'
import $ from 'jquery';
import {getId} from '../../utils/util'

import { getDevicePixelRatio } from '../../utils/util';


const cx = classNames.bind(styles);
class Pk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ruleShow: '',
      analyze:'change',
      ttt:"",
      fixedState:false
    }
    this.callRule = this.callRule.bind(this)
    this.closeFather = this.closeFather.bind(this)
    this.windowOnScroll = this.windowOnScroll.bind(this)
  }
  callRule(value) {
    if (value === 'show') {
      this.setState({
        ruleShow: 'flex'
      })
    }
    $('#nonius').animate({ left: '0' }, 500)
  }
  componentWillMount(){
    let _this=this
    setTimeout(function(){
      $.ajax({
        url: "http://api.fund.eastmoney.com/pinzhong/LJSYLZS?fundCode=000130&indexcode=000300&type=y&_=1538974894321",
        type: 'get',
        dataType: 'jsonp',
        success: function (res) {
          _this.setState({ttt : 222})
        },
        error:function(){
          _this.setState({ttt : 222})
        }
      })
    },500)
    this.windowOnScroll()
  }
  closeFather(value) {
    $('#nonius').animate({ left: '3.5rem' }, 300, () => {
      if (value === 'none') {
        this.setState({
          ruleShow: 'none'
        })
      }
    })
  }
  
  windowOnScroll() {
    let _this = this
    const dpr = getDevicePixelRatio()
    let barState = false
    window.onscroll = function () {
      let h = $('#topBox').height()
      let g = document.documentElement.scrollTop;
      let j = document.body.scrollTop;
    // console.log(h,g,j)
      if (j > g) {
        if (j > h + (12 * dpr)) {
          if (!barState) {
            barState = true
            _this.setState({
              fixedState: true,
            })
          }
        } else {
          if (barState) {
            barState = false
            _this.setState({
              fixedState: false,
            })
          }
        }
      } else {
        if (g > h + (12  * dpr)) {
          if (!barState) {
            barState = true
            _this.setState({
              fixedState: true,
            })
          }
        } else {
          if (barState) {
            barState = false
            _this.setState({
              fixedState: false,
            })
          }
        }
      }
    }
  };
  render() {
    const { ruleShow,ttt ,fixedState} = this.state
    // [72, 93, 67, 82, 65]
    return (
      !ttt ? <div className={cx("loadingBox")}><ReactLoading type="spokes" color="#333" /></div> :
      <div className={cx('pk')}>
        <Rulecontent display={ruleShow} closeFather={this.closeFather} />
        <div id="topBox" className={cx('topBox')}>
        <NavigationBar title="基金对比" back={true} show={false} linkTo={'/detail/'+getId(this.props).split('vs')[1]} />
          <FundEcharts/>
        </div>
        <Edit position={fixedState }/>
        {fixedState?<div style={{"width":"100%","height":"0.74rem"}}></div>:""}
        <ScorePk callback={this.callRule} one={[72, 93, 67, 82, 65]} two={[93, 91, 87, 89, 78]}/>
        <BasePk />
        <PerformancePk />
        <Analyze />


      </div>
    )
  }
}
Pk.propTypes = {
  callback: PropTypes.func
}

export default Pk;
