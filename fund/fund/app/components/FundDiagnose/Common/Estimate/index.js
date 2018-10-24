import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';


const cx = classNames.bind(styles);


class Estimate extends Component {
  render() {
    const { info, more, isShowBack, isShowPKBtn, eva, content } = this.props;

    return (
      <div className={cx("common_bottom")}>
        <div className={cx("shares_evaluate")}>
          {eva && <div>{eva}</div>}
          {content && <span>{content}</span>}
        </div>
      </div>

    )
  }
}

Estimate.propTypes = {
  eva: PropTypes.element,
  content: PropTypes.string,
  data:PropTypes.object
}

Estimate.defaultProps = {
  eva: null,
  content: "",
  data:{}
}

export default Estimate;