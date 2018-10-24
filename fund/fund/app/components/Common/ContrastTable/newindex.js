import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles1.css';
import Tag from '../../Common/Tag';
import { getDevicePixelRatio, findAll } from '../../../utils/util'
import $ from 'jquery'

const cx = classNames.bind(styles);

class ContrastTable extends Component {

  renderTableHeader() {
    const { columns } = this.props;
    const itemNodes = [];
    itemNodes.push(<span className={cx('table-title', 'clearfix')} key={'span-columns-first'}></span>)
    for (let i in columns) {
      itemNodes.push(<span className={cx('table-title', 'clearfix')} key={'span-columns' + i}><label>{columns[i]}</label></span>)
    }
    itemNodes.push(<span className={cx('table-title', 'clearfix')} key={'span-columns-last'}></span>)
    return (
      <li className={cx('table-header')}>
        {itemNodes}
      </li>
    )
  }

  renderRows() {
    const { properties, rows, needContrast } = this.props;
    const liItemNodes = [];

    const yesIcon = require('../../../images/Common/icon_match@3x.png')
    const noIcon = require('../../../images/Common/icon_match_no.png')


    for (let i in properties) {
      let index = 0
      const propText = properties[i];
      if (needContrast) {
        const splitedArr = rows[i].split(';');
        let intNum = splitedArr.length
        if (splitedArr.length > 1) {
          let match_A = false
          let match_name = ''
          for (let k in splitedArr) {

            const extendSpanNodes = [];
            if (k == 0) {
              match_name = propText
              extendSpanNodes.push(<span className={cx('clearfix')} key={'span-prop-empty-' + i}><label></label></span>)
            } else {
              extendSpanNodes.push(<span className={cx('clearfix')} key={'span-prop-empty-' + i}><label></label></span>)
            }
            const itemArr = splitedArr[k].split('|');

            for (let ix in itemArr) {
              const isDiff = !(findAll(splitedArr[k], itemArr[ix]).length > 1);
              console.log(splitedArr[k],itemArr[ix])
              if (!isDiff) {
                match_A = true
              }
              extendSpanNodes.push(
                <span className={cx('clearfix')} key={'span-' + propText + '-' + i + '-' + k + '-' + ix} >
                  <Tag text={itemArr[ix]} theme={isDiff ? 'grey' : 'blue'} mgStyleName={'mgu-mgb-8'} />
                </span>
              );

            }
            const liClassName = k == (splitedArr.length - 1) ? cx('table-row', 'clearfix') : cx('table-row', 'bd-b-1', 'clearfix');
            liItemNodes.push(
              <li id={cx('bottom-none')} className={cx(liClassName, 'lalala')} key={"li-" + propText + '-' + i + '-' + k}>
                {extendSpanNodes}
              </li>
            );

          }
          index++
          liItemNodes.push(<p id={cx('position-leftname')} className={cx(intNum == 3?'three':'two')} key={"liname" + index}>{match_name}</p>)
          liItemNodes.push(<p id={cx('position-right')} className={cx(intNum == 3?'three':'two')} key={"li" + index}><img className={cx('img')} src={match_A ? yesIcon : noIcon} /></p>)
        } else {
          const spanItemNodes = [];
          spanItemNodes.push(
            <span key={'span-prop' + i} className={cx('clearfix')}><label>{propText}</label></span>
          );
          const dataArr = splitedArr[0].split('|');
          for (let j in dataArr) {
            const isDiff = !(findAll(splitedArr[0], dataArr[j]).length > 1);
            spanItemNodes.push(<span key={'span-' + propText + '-' + i + '-' + j} className={cx('clearfix')}><Tag text={dataArr[j]} theme={isDiff ? 'grey' : 'blue'} /></span>);
            if (j == 1) {
              spanItemNodes.push(<span className={cx('clearfix')} key={'span-prop-empty1-'}><label><img className={cx('img')} src={!isDiff ? yesIcon : noIcon} /></label></span>)
            }
          }
          const liClassName = cx('table-row', 'clearfix');

          liItemNodes.push(
            <li key={"li-" + propText + i} className={liClassName}>
              {spanItemNodes}
            </li>
          );

        }
      } else {
        const spanItemNodes = [];
        const splitedArr = rows[i].split(';').split('|');
        for (let j in splitedArr) {
          spanItemNodes.push(
            <span key={'span-' + i + '-' + j} styles={styles}>{splitedArr[j]}</span>
          );
        }
      }
    }
    return liItemNodes;
  }

  render() {
    const { needBorder } = this.props;
    const tableHeader = this.renderTableHeader()
    const contentBoxClass = needBorder ? cx('content-box') : cx('content-box-without-border');
    return (
      <ul id={cx('box')} className={cx('last', contentBoxClass)}>
        {tableHeader}
        {this.renderRows()}
      </ul>

    );
  }
}

ContrastTable.propTypes = {
  columns: PropTypes.array,
  properties: PropTypes.array,
  rows: PropTypes.array,
  needBorder: PropTypes.bool,
  needContrast: PropTypes.bool
}

ContrastTable.defaultProps = {
  columns: [],
  properties: [],
  rows: [],
  needBorder: false,
  needContrast: false
}

export default ContrastTable;