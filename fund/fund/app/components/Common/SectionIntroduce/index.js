import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
const cx = classNames.bind(styles);

class SectionIntroduce extends Component {

  render() {
    const { titles, iconSrc,otherCss } = this.props;
    const introduceList = []
    for(let i in titles){
        introduceList.push(<p key={i} ><span className={cx('introduce-box',otherCss?'aaa':'')}></span><span>{titles[i]}</span></p>)
    }
    return (
      <div className={cx('section-introduce','clearfix')}>
        {introduceList}
      </div>
    )
  }
}

SectionIntroduce.propTypes = {
  titles: PropTypes.array ,
  otherCss:PropTypes.bool

}

SectionIntroduce.defaultProps = {
  titles: [11,22,33],
  otherCss:false
}

export default  SectionIntroduce