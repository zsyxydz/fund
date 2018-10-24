import React, { Component } from 'react';
import NavigationBar from '../Common/NavigationBar'
import SectionContainer from '../Common/SectionContainer';
import classNames from 'classnames/bind';
import UserHeader from './UserHeader'
import MatchIndexSection from './MatchIndexSection'
import TabCommon from '../Common/TabCommon'
import LineCharts from '../IntelligentMatch/ProfitRate'
import $ from 'jquery'
import ReactLoading from "react-loading";
import styles from './styles.css';
import {getId} from '../../utils/util'

// const downData = require('../../../resource/fund.js')
const cx = classNames.bind(styles);

class IntelligentMatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 22,
      data: [],
      ttt:'',
      dataRow: {}
    }
    this.onSelectedChangeDays = this.onSelectedChangeDays.bind(this)
  }
  componentDidMount(){
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
   
    const downData = require('../../../resource/fund2.js')
    _this.setState({
      dataRow: downData,
    })
  }
  componentWillMount() {
    
  }
  onSelectedChangeDays(value) {
    let _self = this
    _self.state.days = value
    value === "近一月" ? _self.setState({ days: 22 }) : ""
    value === "近三月" ? _self.setState({ days: 65}) : ""
    value === "近一年" ? _self.setState({ days: 245 }) : ""
    value === "全部" ? _self.setState({ days: 0 }) : ""
  }
  render() {
    const { days, dataRow ,ttt} = this.state


    return (
      !ttt ? <div className={cx("loadingBox")}><ReactLoading type="spokes" color="#333" /></div> :<div>
        <NavigationBar title="智能匹配详情" linkTo={'/detail/'+getId(this.props)}></NavigationBar>
        <UserHeader></UserHeader>
        <SectionContainer titleType="text" sectionTitle="客户匹配指数" sectionTitleIconSrc="icon_match_index@2x.png" rightSideType="only">
          <MatchIndexSection></MatchIndexSection>
        </SectionContainer>
        <SectionContainer titleType="text" sectionTitle="收益率对比" sectionTitleIconSrc="icon_match_index@2x.png" width={true} rightSideType="titles" rightSideValues={['客户收益率', '基金收益率']}>
          <TabCommon onSelectChanged={this.onSelectedChangeDays} titles={["近一月", "近三月", "近一年", "全部"]} content= {<LineCharts data={dataRow.points.slice(days==0?0:(dataRow.points.length-days-1),dataRow.points.length-1)} days={days} />} ></TabCommon>
        </SectionContainer>
      </div>
    );
  }
}

export default IntelligentMatch;


