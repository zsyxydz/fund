import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SectionSwitch from '../SectionSwitch';
import styles from './styles.css';

const cx = classNames.bind(styles);

class SectionTitleTab extends Component {
  constructor(props) {
    super(props)
    this.onTabChanged = this.onTabChanged.bind(this)
  }
  onTabChanged(value) {
    const { onSelectChanged } = this.props
    onSelectChanged(value)
  }

  render() {
    return (
      <div className={cx('content-box')}>
        <SectionSwitch titles={["压力测试", "动力测试"]} onSelectChanged={this.onTabChanged} titleLeftCss={true}></SectionSwitch>
      </div>
    )
  }
}

SectionTitleTab.propTypes = {
  title: PropTypes.string,
  iconSrc: PropTypes.string,
  onSelectChanged: PropTypes.func
}

SectionTitleTab.defaultProps = {
  title: "基金规模",
  iconSrc: "",
  onSelectChanged: null
}

export default SectionTitleTab;