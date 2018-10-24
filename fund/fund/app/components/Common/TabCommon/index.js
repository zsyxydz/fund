import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import ItemButton from './ItemButton';

const cx = classNames.bind(styles);

class SectionSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: props.titles[0]
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(value, checked) {
    const { onSelectChanged } = this.props;
    if (checked) {
      this.setState({ checkedValue: value }, () => {
        onSelectChanged && onSelectChanged(value);
      })
    }
  }

  render() {
    const { titles, isLoading, content } = this.props;
    const { checkedValue } = this.state;

    const btnNodes = [];
    for (let i in titles) {
      btnNodes.push(<ItemButton value={titles[i]} checkedValue={checkedValue} onChange={this.onChangeHandler} isProcessing={isLoading} key={titles[i]}></ItemButton>)
    }

    return (
      <div className={cx('switch-box', 'clearfix')}>
        <div className={cx('child-box', 'clearfix')}>
          <div className={cx("middle",'clearfix')}>
            {btnNodes}

          </div>
        </div>
        <div className={cx('tab-box')}>{content}</div>
      </div>
    );
  }
}

SectionSwitch.propTypes = {
  //为tab选项切换的内容
  titles: PropTypes.array,
  //传如函数，函数传入一个参数，为tab切换到的title[i]
  onSelectChanged: React.PropTypes.func,
  // no use so far...
  isLoading: React.PropTypes.bool,
  //传如element，为各tab选项时显示的内容
  content: React.PropTypes.element
}

SectionSwitch.defaultProps = {
  titles: null,
  content: null,
  onSelectChanged: null,
  isLoading: false
}

export default SectionSwitch;