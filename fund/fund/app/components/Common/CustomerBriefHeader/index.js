import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import _ from 'lodash';
import $ from 'jquery'

const cx = classNames.bind(styles);


class CustomerBriefHeader extends Component {
  constructor(props) {
    super(props);
    this.onSwitchTab = this.onSwitchTab.bind(this);
    this.fetchCustomerInfo = this.fetchCustomerInfo.bind(this);
    this.fetchTags = this.fetchTags.bind(this);
    this.checkEmpty = this.checkEmpty.bind(this);

    this.state = {
      customerInfo: null,
      tagList: null,
      currentTab: 'assets',
      loading: true,
      contentClass: "conditionArea",
      range: 0
    }
    // this.windowOnScroll();

  }

  checkEmpty(object) {
    return (_.isEmpty(object) || _.every(object, (property) => {
      if (typeof property === 'object') {
        return _.isEmpty(property);
      }
      return false;
    }))
  }
  fetchTags() {
    const { client_id } = this.props.match.params;
  }

  fetchCustomerInfo() {
    const { client_id } = this.props.match.params;
  }

  onSwitchTab(tab) {
    // console.log(999999,document.cookie.split(';')[0].split('=')[1])
    // let isLoading = document.cookie.split(';')[0].split('=')[1]
    const { currentTab } = this.state;


    // // console.log(1, isLoading)
    // isLoading = 'true' === 'true'
    // isLoading = 'false' === 'true'
    // if(isLoading){
    //   return
    // }


    switch (tab) {
      case "assets":
        $('#bt').animate({ left: "-66.9%", right: "0" }, 200)
        break;
      case "trade":
        $('#bt').animate({ left: "0", right: "0" }, 200)
        break;
      case "achievement":
        $('#bt').animate({ left: "0", right: '-66.9%' }, 200)
        break;
      default:
        break;
    }
    if (tab === currentTab) {
      return;
    }
    this.setState({ currentTab: tab });
    this.props.onTabChange(tab);
  }
  componentDidMount() {
    this.fetchCustomerInfo();
    this.fetchTags();
  }
  render() {
    const { currentTab, customerInfo, tagList, loading } = this.state;
    const { position, isLoading } = this.props;
    // console.log("tab",isLoading)
    return (
      <header className={cx('bg_white', position)}>
        <div id='scollTop' className={cx('water_mark_box')}>
          <div className={cx('stock_tab_box')}>
            <span id="bt" className={cx('animate')}></span>
            <a
              className={currentTab === 'assets' && cx('active', 'bottom-div')}
              onClick={() => {
                $('#bt').stop()
                this.onSwitchTab('assets')
              }}>基本分析
              </a>
            <a
              className={currentTab === 'trade' && cx('active', 'bottom-div')}
              onClick={() => {
                $('#bt').stop()
                this.onSwitchTab('trade')

              }}>业绩评估
              </a>
            <a
              className={currentTab === 'achievement' && cx('active', 'bottom-div')}
              onClick={() => {
                $('#bt').stop()
                this.onSwitchTab('achievement')
              }}>潜力预测
              </a>
          </div>
        </div>
      </header>
    );
  }
}

CustomerBriefHeader.propTypes = {
  isLoading: React.PropTypes.bool,
};
CustomerBriefHeader.defaultProps = {
  isLoading: false,
}
export default CustomerBriefHeader;
