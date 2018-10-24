
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import PropTypes from 'prop-types';


const cx = classNames.bind(styles);
class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.onTabChangeCommon = this.onTabChangeCommon.bind(this)
  }
  onTabChangeCommon(value) {
  }
  render() {
    const {position} = this.props
    const ss1 = require('../../../images/Common/edit-yellow@2x.png')
    const ss2 = require('../../../images/Common/edit-blue@2x.png')

    return (
      <div className={cx('edit', 'clearfix',position? "conditionArea_fixed" : "conditionArea")} >
        <div className={cx('vs')}><img src="../../../images/Common/vs@2x.png"/></div>
        
        <div className={cx('fund-one')}>
          <div className={cx('sjx-yellow')}></div>
          <div className={cx('one')}>
            <img className={cx('editImg')} src={ss1} />
            <div className={cx('fundName')} ref={"fundName"+"fd100032"}>富国中证红利指数A</div>
          </div>
        </div>
        <div className={cx('fund-two')}>
          <div className={cx('sjx-blue')}></div>
          <div className={cx('two')}>
            <img className={cx('editImg')} src={ss2} />
            <div className={cx('fundName')} ref={"fundName"+"fd110003"}>易方达上证50指数分级</div>
          </div>
        </div>
      </div>
    )
  }
}
Edit.propTypes = {
  position: PropTypes.bool
}
export default Edit;
