
import React from 'react';
import CustomerBriefHeader from '../Common/CustomerBriefHeader';
import classNames from 'classnames/bind';
import styles from './styles.css';
import echarts from 'echarts'
import NavigationBar from '../Common/NavigationBar';
import EchartsRadar from './Common/EchartsCommonRadar';
import Prompt from './Common/Prompt';
import Rule from './Common/Rule';
import Rulecontent from './Common/RuleContent';
import Shares from './Common/Shares';
import SectionContainer from '../Common/SectionContainer';
import FundScale from './BasicAnaylze/FundScale';
import EchartsBar from './BasicAnaylze/TrackEcharts';
import Handler from './BasicAnaylze/FundHandler';
import BasicPosition from './BasicAnaylze/HoldingAnalysis';
import Company from './BasicAnaylze/Company';
import TabCommon from '../Common/TabCommon';
import Performance from './AchievementAssessment/Performance';
import Quartile from './AchievementAssessment/Quartile';
import Attribution from './AchievementAssessment/Attribution';
import Market from './PotentialPrediction/Market';
import TestPressure from './PotentialPrediction/Test/TestPressure';
import TestPower from './PotentialPrediction/Test/TestPower';
import Profit from './PotentialPrediction/Profit';
import ReactLoading from "react-loading";
import $ from 'jquery';

import { getDevicePixelRatio,getId } from '../../utils/util';
const data = require('../../../resource/new-data')
// const s = require('../../images/Common/lv1@2x.png')
import _ from 'lodash';

const cx = classNames.bind(styles);
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 'assets',
      status: false,
      statusLoading: true,
      fixedClass: 'conditionArea',
      titleSwitchTabName: 'pressure',
      days: "thirty",
      treeData: {},
      handlerData: {},
      ttt: '',
      loadingState: false,
      id: 0,
      fixedState: false,
      state:0
    }
    this.onTabChange = this.onTabChange.bind(this);
    this.closeFather = this.closeFather.bind(this);
    this.callRule = this.callRule.bind(this);
  }
  componentWillMount() {
    this.titleSwitchTab = this.titleSwitchTab.bind(this);
    this.windowOnScroll = this.windowOnScroll.bind(this)
    this.attributionTab = this.attributionTab.bind(this)
    this.onSelectedChangeDays = this.onSelectedChangeDays.bind(this);
    this.windowOnScroll()
    
    // console.log(this.props.match.params.id)

  }
  componentDidMount() {
    let _this = this
    const datas = this.props.location.query
    const dataAll = require('../../../resource/new-data')
    let that = this
    const sss = require('../../../resource/treeMap')
    setTimeout(function () {
      $.ajax({
        url: "http://api.fund.eastmoney.com/pinzhong/LJSYLZS?fundCode=000130&indexcode=000300&type=y&_=1538974894321",
        type: 'get',
        dataType: 'jsonp',
        success: function (res) {
          _this.setState({ ttt: 222 })
        },
        error: function () {
          _this.setState({ ttt: 222 })
        }
      })
    }, 500)

    this.setState({
      profit: dataAll.profit_potential.thirty,
    })
    let data = sss
    let resData = {}
    for (let i = 0; i < data.items.length; i++) {
      const element = data.items[i];
      resData[element.kind] = {

        child: {
          value: element.profit_rate
        },
      }
      for (let j = 0; j < element.contibution_item.length; j++) {
        const childValue = element.contibution_item[j];
        resData[element.kind].child[childValue.name] = childValue.value
      }
    }
    that.setState({
      treeData: resData
    })

  }
  onTabChange(tab) {
    this.setState({ show: tab })
  }
  titleSwitchTab(value) {
    let _self = this
    _self.state.titleSwitchTabName = value
    value === "压力测试" ? _self.setState({ titleSwitchTabName: "pressure" }) : ""
    value === "动力测试" ? _self.setState({ titleSwitchTabName: "power" }) : ""
  }

  onSelectedChangeDays(value) {
    let _self = this
    _self.state.days = value
    value === "30天" ? _self.setState({ profit: data.profit_potential.thirty }) : ""
    value === "60天" ? _self.setState({ profit: data.profit_potential.sixty }) : ""
    value === "90天" ? _self.setState({ profit: data.profit_potential.ninety }) : ""
  }

  attributionTab(value) {
    let _self = this
    _self.state.attr = value
    value === "近一年" ? _self.setState({ attr: "one" }) : ""
    value === "近三年" ? _self.setState({ attr: "three" }) : ""
    value === "全部" ? _self.setState({ attr: "all" }) : ""
  }

  windowOnScroll() {
    let _this = this
    const dpr = getDevicePixelRatio()
    const { fixedState } = this.state
    let barState = false

    window.onscroll = function () {
      let h = $('#fixed-height').height()
      let g = document.documentElement.scrollTop;
      let j = document.body.scrollTop;
      // console.log(h,g,j)
      if (j > g) {
        if (j > h - (44 * dpr)) {
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
        if (g > h - (44 * dpr)) {
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
  callRule(value) {
    if (value === 'show') {
      this.setState({
        ruleShow: 'flex'
      })
    }
    $('#nonius').animate({ left: '0' }, 500)
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
  loadingFuncs(value) {
    // console.log("诊断页面切换时，echarts是否处于loading状态",value)
    document.cookie = "loading="+value

  }

  render() {
    // console.log(getId(this.props.match))
    const id = this.props.match.params.id
    const FollowData = require('../../../resource/zzhl_index')
    const datas =  id
    const lalal = require('../../../resource/allData')
    const { show, ruleShow, days, fixedClass, profit, year, fixedState, titleSwitchTabName, treeData, loadingState, ttt } = this.state;
    //压力测试/动力测试
    const TEST = {
      pressure: <TestPressure />,
      power: <TestPower />
    }
    //基金诊断大的tab页
    const MAP = {
      assets: !ttt ? <div className={cx("loadingBox")}><ReactLoading type="spokes" color="#333" /></div> :
        <div>
          <FundScale data={lalal[datas]} />
          <Company data={lalal[datas]} />
          <Handler data={lalal[datas]} />
          {datas == 'fd000011' ? '' : <EchartsBar data={FollowData[datas].data} fundId={datas} />}
          <BasicPosition data={lalal[datas]} />
        </div>,
      trade: <div>
        <Performance data={lalal[datas]} />
        <Quartile data={lalal[datas]} />
        <SectionContainer titleType="text" sectionTitle="业绩归因" sectionTitleIconSrc="Achievement/Ach-gy.png" onTabChanged={this.attributionTab} rightSideType="only" ><Attribution data={treeData} loadingFunc={this.loadingFuncs.bind(this)} /></SectionContainer>
      </div>,
      achievement: <div>
        <SectionContainer titleType="text" sectionTitle="擅长行情" sectionTitleIconSrc="Potential/P-hq@2x.png" onTabChanged={this.timeTab} rightSideType="titles" rightSideValues={["本基金", "同类平均", '沪深300']} ><Market /></SectionContainer>
        <SectionContainer titleType="tab" sectionTitleIconSrc="" onTabChanged={this.titleSwitchTab} rightSideType="titles" rightSideValues={["本基金", "同类平均", '沪深300']} >{TEST[titleSwitchTabName]}</SectionContainer>
        <SectionContainer titleType="text" sectionTitle="盈利潜力" sectionTitleIconSrc="Potential/P-ylql@2x.png" onTabChanged={this.timeTab} rightSideType="only" ><TabCommon onSelectChanged={this.onSelectedChangeDays} titles={["30天", "60天", "90天"]} content={<Profit data={profit} />} ></TabCommon></SectionContainer>
      </div>
    }
    return (
      !ttt ? <div className={cx("loadingBox")}><ReactLoading type="spokes" color="#333" /></div> :
        <div className={cx("all")} ref="body">
          <Rulecontent display={ruleShow} closeFather={this.closeFather} />
          <div id='fixed-height' className={cx("FundDiagnosis")}>
            <NavigationBar title="基金诊断" linkTo={'/home'} isShowPKBtn={true} />
            <Prompt info="" />
            <Shares icon="icon_test@2x.png" />
            <EchartsRadar />
            <Rule func={this.callRule} top='2.37rem' />
          </div>
          <div className={cx("FundTab")}>
            <CustomerBriefHeader
              onTabChange={this.onTabChange}{...this.props}
              position={fixedState ? "conditionArea_fixed" : "conditionArea"} ref="tab"
            />
            {MAP[show]}
          </div>
        </div>
    )
  }
}
export default Test;
