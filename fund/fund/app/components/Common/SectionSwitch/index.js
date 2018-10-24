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
      this.setState({checkedValue: value}, () =>{
        onSelectChanged && onSelectChanged(value);
      })
    }
  }

  render() {
    const {titles, isLoading,titleLeftCss} = this.props;
    const {checkedValue} = this.state;

    const btnNodes = [];
    for (let i in titles) {
      btnNodes.push(<ItemButton value={titles[i]} checkedValue={checkedValue} onChange={this.onChangeHandler} isProcessing={isLoading} key={titles[i]} newCss={titleLeftCss}></ItemButton>) 
    }

    return(
      <div className={cx('switch-box')}>
        { btnNodes }
      </div>
    );
  }
}

SectionSwitch.propTypes = {
  titles: PropTypes.array,
  onSelectChanged: React.PropTypes.func,
  // no use so far...
  isLoading: React.PropTypes.bool,
  titleLeftCss: React.PropTypes.bool,
}

SectionSwitch.defaultProps = {
  titles: null,
  onSelectChanged: null,
  isLoading: false,
  titleLeftCss: false,
}

export default SectionSwitch;