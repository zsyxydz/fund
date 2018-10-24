import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import { getDevicePixelRatio, findAll } from '../../../utils/util'
import $ from 'jquery'

const cx = classNames.bind(styles);





const columns = {
  '风险等级': ["激进型|激进型"],
  '投资品种': ['股票|股票', '基金|--'],
  '投资期限': ['长期|长期']
}



class ContrastTable extends Component {




  render() {

    const {columns} = this.props
    const yesIcon = require('../../../images/Common/icon_match@3x.png')
    const noIcon = require('../../../images/Common/icon_match_no.png')




    const { needBorder } = this.props;
    const contentBoxClass = needBorder ? cx('content-box') : cx('content-box-without-border');
    return (
      <div id={cx('box')}>
        <ul>
          <li className={cx('head')}><span></span><span>您</span><span>本基金</span><span></span></li>
          {
            Object.keys(columns).map(i => {
              // console.log(columns[i])
              let list = []
              let list2 = []
              let colorClass=''
              let isDiff =false
              for (let k = 0; k < columns[i].length; k++) {
                const element = columns[i][k];
                if(element.split('|')[0] == element.split('|')[1]){
                  isDiff=true
                } 
                
                colorClass = element.split('|')[0] == element.split('|')[1]?'tag-blue':'tag-grey'
                
                list.push(<span key={k} className={cx(colorClass)}>{element.split('|')[0]}</span>)
                list.push(<br key={k+"8"}/>)
                list2.push(<span key={k} className={cx(colorClass)}>{element.split('|')[1]}</span>)
                list2.push(<br key={k+"8"}/>)
              }
              return <li key={i}>
                <span>{i}</span>
                <span>
                  {list}
                </span>
                <span>
                  {list2}
                </span>
                <span>
                  <img src={isDiff?yesIcon:noIcon}></img>
                </span>
              </li>
            })
          }
          
        </ul>
      </div>


    );
  }
}

ContrastTable.propTypes = {
  columns: PropTypes.object,
  properties: PropTypes.array,
  rows: PropTypes.array,
  needBorder: PropTypes.bool,
  needContrast: PropTypes.bool
}

ContrastTable.defaultProps = {
  columns: {},
  properties: [],
  rows: [],
  needBorder: false,
  needContrast: false
}

export default ContrastTable;