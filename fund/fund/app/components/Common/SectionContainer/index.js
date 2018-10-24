import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionSwitch from '../SectionSwitch';
import SectionTitle from '../SectionTitle';
import SectionIntroduce from '../SectionIntroduce';
import SectionTitleTab from '../SectionTitleTab';

const cx = classNames.bind(styles);

class SectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: false,
      show: "1",
      year: "1"
    }
    this.onSelectedChangeHandler = this.onSelectedChangeHandler.bind(this);
    this.titleSwitch = this.titleSwitch.bind(this);
  }
  componentWillReceiveProps(nextProps) {
  }
  componentWillReceiveProps() {
  }
  componentDidUpdate() {
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  //title右侧的tab回调返回值
  onSelectedChangeHandler(value) {
    const { onTabChanged } = this.props;
    onTabChanged(value)
  }
  //title左侧的回调返回值
  titleSwitch(value){
    const { onTabChanged } = this.props;
    onTabChanged(value)
  }  
    
  render() {
    const { data} = this.state;
    const {
        titleType,
        sectionTitleIconSrc,
        sectionTitle,
        children,
        rightSideType,
        rightSideValues,
        needBottomSeparator,
        width,bg,noRightPadding
    } = this.props;
    var sectionTitleArea = null;
    //判断title的左侧显示类型
    if (titleType == "text") {
      sectionTitleArea = <SectionTitle bg={bg} title={sectionTitle} iconSrc={sectionTitleIconSrc}></SectionTitle>
    } else if(titleType == "tab"){
      sectionTitleArea = <SectionTitleTab onSelectChanged={this.titleSwitch}></SectionTitleTab >
    }
    var rightSideArea = null;
    //判断title右侧显示类型
    switch (rightSideType) {
      case "titles":

        rightSideArea = <SectionIntroduce titles={rightSideValues} otherCss={width} isLoading={false}></SectionIntroduce>
        break
      case "switch":
        rightSideArea = <SectionSwitch titles={rightSideValues} onSelectChanged={this.onSelectedChangeHandler} isLoading={false}></SectionSwitch>
        break;
    }

    return (
      <div className={cx('section-box',bg?'':'nonn')}>
        <div className={cx('section-title-area', 'clearfix',bg?'':'nonn')}>
          <div className={cx('left-side-area')}>
            {sectionTitleArea}
          </div>
          {rightSideArea &&
            (<div className={cx('right-side-area')}>
              {rightSideArea}
            </div>)}
        </div>
        <div className={cx('section-content-area', noRightPadding?'noRightpadding':'hasRight')}>
          {
              React.cloneElement(children, data)
          }
        </div>
        {needBottomSeparator && (<div className={cx('separator-line')}></div>)}
      </div>
    );
  }
}

SectionContainer.propTypes = {
  titleType: PropTypes.string,
  sectionTitleIconSrc: PropTypes.string,
  sectionTitle: PropTypes.string,
  children: PropTypes.node,
  rightSideType: PropTypes.string,
  rightSideValues: PropTypes.array,
  needBottomSeparator: PropTypes.bool,
  onTabChanged: PropTypes.func,
  titleSwitchTab: PropTypes.func,
  width:PropTypes.bool,
  bg:PropTypes.bool,
  noRightPadding:PropTypes.bool
}

SectionContainer.defaultProps = {
  titleType: "text",
  sectionTitleIconSrc: "icon_test@2x.png",
  sectionTitle: "",
  children: null,
  rightSideType: "",
  rightSideValues: null,
  needBottomSeparator: true,
  onTabChanged: null,
  titleSwitchTab: null,
  width:false,
  bg:true,
  noRightPadding:false


}

export default SectionContainer;