import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

class ItemButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checkedValue === props.value
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checkedValue === this.props.value
    });
  }

  onClickHandler() {
    const { isProcessing } = this.props;
    if (isProcessing){
      return;
    }
    const {value, onChange} = this.props;
    const {checked} = this.state;
    if (checked) {
      return;
    }
    this.setState({
      checked: !checked
    });

    // console.log(this.props);
    onChange && onChange(value, !checked);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checkedValue === this.props.value
    });
  }

  render() {
    const {checked} = this.state;
    const { value } = this.props;
    const btnClassName = checked ? cx('selected-text') : cx('unselected-text');

    
    return (
      <div className={cx('content-box')} onClick={this.onClickHandler}>
        <p className={btnClassName}>{ value }</p>
        {/* { checked && <div className={cx('underline')}></div> } */}
      </div>
    );
    
  }
}

ItemButton.propTypes = {
  value: React.PropTypes.string,
  checkedValue: React.PropTypes.string,
  onChange: React.PropTypes.func,
  isProcessing: React.PropTypes.bool
}

ItemButton.defaultProps = {
  value: "",
  checkedValue: "",
  onChange: null,
  isProcessing: false
}

export default ItemButton;