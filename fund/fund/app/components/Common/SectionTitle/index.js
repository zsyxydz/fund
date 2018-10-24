import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

class SectionTitle extends Component {

  render() {
    const { title, iconSrc, size ,bg} = this.props;
    const icon = require(`../../../images/${iconSrc}`);

    var contentBoxClass = null;
    var iconClass = null;
    var titleClass = null;
    if (size == "small"){
      contentBoxClass = cx('content-box','clearfix',bg?'':'bgNone');
      iconClass = cx('small-icon');
      titleClass = cx('small-title-span');
    } else {
      contentBoxClass = cx('small-content-box','clearfix',bg?'':'bgNone');
      iconClass = cx('icon');
      titleClass = cx('title-span');
    }

    return (
      <div className={contentBoxClass} >
        <img className={iconClass} src={icon}></img>
        <span className={titleClass}>{title}</span>
      </div>
    )
  }
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  iconSrc: PropTypes.string,
  size: PropTypes.string,
  bg:PropTypes.bool,
}

SectionTitle.defaultProps = {
  title: "基金规模",
  iconSrc: "icon_test@2x.png",
  size: "normal",
  

}

export default SectionTitle;