import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { BrowserRouter as Router, Link } from "react-router-dom"
import {getId} from '../../../utils/util'


const cx = classNames.bind(styles);

const backIcon = require('../../../images/Common/icon_back@2x.png');

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.handleHref = this.handleHref.bind(this);
  }

  handleHref() {

    const { linkTo } = this.props;
    document.location.href = '/#' + linkTo;
  }

  render() {
    const { title, isShowBack, isShowPKBtn, show,back ,linkTo} = this.props;
    return (
      <div className={cx('top-nav', 'gradient_orange', 't_a_center',show?'':'show')}>
        <Link to={{pathname:linkTo}}><div  className={cx(show?'ss':(back?'ss':'dis'))}>{isShowBack && (
          <img className={cx('back-icon')} src={backIcon}></img>
        )}</div></Link>
        <p className={cx('title-text')}>{title}</p>
        {isShowPKBtn && (
          
          <Link to={'/contrast/'+'fd100032vs'+getId(this.props)}><div className={cx('pk-btn')}>
          <img src="../../../images/Common/pk-icon@2x.png" />
          </div></Link>
        )}
      </div>
    )
  }
}

NavigationBar.propTypes = {
  title: PropTypes.string,
  isShowBack: PropTypes.bool,
  isShowPKBtn: PropTypes.bool,
  show: PropTypes.bool,
  back: PropTypes.bool,
  linkTo:PropTypes.string
}

NavigationBar.defaultProps = {
  title: "",
  isShowBack: true,
  isShowPKBtn: false,
  show: true,
  back:false,
  linkTo:'/home'
}

export default NavigationBar;