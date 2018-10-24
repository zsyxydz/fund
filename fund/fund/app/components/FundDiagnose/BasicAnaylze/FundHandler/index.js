import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../../Common/SectionContainer'

const cx = classNames.bind(styles);



class Handler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inf: {},
      nameList: [],
      allData: {}
    }
    this.timeTab = this.timeTab.bind(this)
  }


  // componentWillMount() {
  //   const datae = this.props.data
  //   this.setState({
  //     allData: datae
  //   })
  //   let people = []
  //   for (let i = 0; i < datae.basic_analyze.fund_manager.length; i++) {
  //     const element = datae.basic_analyze.fund_manager[i];
  //     people.push(element.name)
  //   }
  //   this.setState({
  //     nameList: people
  //   })
  //   this.setState({
  //     inf: datae.basic_analyze.fund_manager[0]
  //   })
  // }
  componentDidMount() {
    const datae = this.props.data
    this.setState({
      allData: datae
    })
    let people = []
    for (let i = 0; i < datae.basic_analyze.fund_manager.length; i++) {
      const element = datae.basic_analyze.fund_manager[i];
      people.push(element.name)
    }
    this.setState({
      nameList: people
    })
    this.setState({
      inf: datae.basic_analyze.fund_manager[0]
    })
  }
  timeTab(value) {
    const { allData } = this.state;
    for (let i = 0; i < allData.basic_analyze.fund_manager.length; i++) {
      const element = allData.basic_analyze.fund_manager[i];
      if (element.name == value) {
        this.setState({
          inf: element
        })
      }
    }
  }
  render() {

    const { img, imgw } = this.props;
    const { inf, nameList } = this.state;
    let newList = []
    let newInf = {}
    const datae = this.props.data
    let allData = datae
    let people = []
    for (let i = 0; i < datae.basic_analyze.fund_manager.length; i++) {
      const element = datae.basic_analyze.fund_manager[i];
      people.push(element.name)
    }

    newList = nameList.length != 0? nameList:people
    newInf = nameList.length != 0? inf:datae.basic_analyze.fund_manager[0]
    
    // if (inf) {
    //   inf = datae.basic_analyze.fund_manager[0]
    // }


    return (


      <SectionContainer titleType="text" sectionTitle="基金经理人" onTabChanged={this.timeTab} rightSideType={newList.length > 1 ? 'switch' : 'only'} rightSideValues={newList} sectionTitleIconSrc="OpenInterest/handler@3x.png" >
        <div className={cx("Handler")}>
          <div className={cx("Handler-img")}><img src={newInf.head_pic != '' ? "../../../../images/Common/" + newInf.head_pic : newInf.gender == '男' ? img : imgw} /></div>
          <div className={cx("Handler-info")}>
            <p className={cx("Handler-name")}><span>{newInf.name}</span><span>{newInf.gender}</span><span>{newInf.education}</span></p>
            <p className={cx("Handler-int")}><span>{newInf.company}</span></p>
            <p className={cx("Handler-particular")}><span><span><abbr>{newInf.period_of_operation}</abbr>年</span><span>从业年限(年)</span></span><span><span><abbr>{newInf.manage_count}</abbr>只</span><span>管理基金</span></span><span><span><abbr>{newInf.manage_scope.toFixed(2)}</abbr>亿元</span><span>管理规模</span></span></p>
            <span className={cx("dl")}><span style={newInf.profit > 0 ? { 'color': '#FC4415' } : { 'color': '#58AEFF' }}><abbr>{(newInf.profit * 100).toFixed(2)}</abbr>%</span><br /><span>任职以来收益</span></span>
          </div>

          <div className={cx("FundScale-bottom")}>
            <div className={cx("shares_evaluate")}>
              基金经理人<span className={cx("light")} style={{ 'color': newInf.tag.tag_operation[1] == 1 ? '#ff7818' : newInf.tag.tag_operation[1] == 2 ? '#5b5b5b' : '#1b88ee' }}>{newInf.tag.tag_operation ? newInf.tag.tag_operation[0] : "实力雄厚"}</span>,管理<span className={cx("light")} style={{ 'color': newInf.tag.tag_cout[1] == 1 ? '#ff7818' : newInf.tag.tag_cout[1] == 2 ? '#5b5b5b' : '#1b88ee' }}>{newInf.tag.tag_cout ? newInf.tag.tag_cout[0] : "规模强大"}</span>,<span style={{ 'color': newInf.tag.tag_profit[1] == 1 ? '#ff7818' : newInf.tag.tag_profit[1] == 2 ? '#5b5b5b' : '#1b88ee' }} className={cx("light")}>{newInf.tag.tag_profit ? newInf.tag.tag_profit[0] : "收益一般"}</span>

            </div>
          </div>
        </div>


      </SectionContainer>


    )
  }
}

Handler.propTypes = {
  info: PropTypes.string,
  img: PropTypes.string,
  imgw: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  data: PropTypes.object
}

Handler.defaultProps = {
  info: "您与该产品存在较高的匹配度",
  img: "../../../../images/Common/icon_manager_man@2x.png",
  imgw: "../../../../images/Common/icon_manager_women@2x.png",
  isShowBack: true,
  isShowPKBtn: true
}

export default Handler;