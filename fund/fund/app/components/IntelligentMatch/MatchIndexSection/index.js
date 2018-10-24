import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionTitle from '../../Common/SectionTitle';
import ContrastTable from '../../Common/ContrastTable/index';
import { findAll } from '../../../utils/util';

const cx = classNames.bind(styles);

class MatchIndexSection extends Component {
  render() {
    const rowData = {
      '风险等级': ["激进型|激进型"],
      '投资品种': ['股票|股票', '基金|--'],
      '投资期限': ['长期|长期']
    }
    const rowData2 = {
      '股指偏好': ["中低估值|低估值"],
      '行业偏好': ['偏好房地产|偏好房地产','偏好金融|偏好金融','偏好互联网|偏好大消费'],
      '规模偏好': ['中大盘股|大盘股'],
      '成长偏好': ['业绩增长|业绩增长']
    }


    // const indexes = findAll('股票|股票;货币基金|场内基金;短期理财|短期理财', '短期理财');

    return (
      <div>
        <SectionTitle size="small" title="适当性" iconSrc="icon_suitability@2x.png"></SectionTitle>
        <ContrastTable columns={rowData} ></ContrastTable>
        <SectionTitle size="small" title="归因特性" iconSrc="icon_suitability@2x.png"></SectionTitle>
        <ContrastTable columns={rowData2}></ContrastTable>
      </div>
    )
  }
}

export default MatchIndexSection;