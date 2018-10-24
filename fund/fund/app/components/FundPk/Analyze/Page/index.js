
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

import Echarts from 'echarts-for-react'


const cx = classNames.bind(styles);
class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let color1=["#FFC303", "#FFD95F", "#FFE89D", "#FFF1C3", "#FCFAF2","#F0EEE8"]
    let color2=["#8294B3", "#9EB0CF", "#A9BFE4", "#BBD2FB",'#D1E1FC',"#EDF4FF"]
    let list = [
      { name: "制造业", value: 36.11 },
      { name: "金融业", value: 16.07 },
      { name: "电力、热力、燃气", value: 12.61 },
      { name: "房地产业", value: 7.73 },
      { name: "交通、仓储、邮政业", value: 5.90 },
      { name: "其它", value: 21.58 },]
      
    let list2 = [
      { name: "制造业", value: 39.05 },
      { name: "金融业", value: 36.16 },
      { name: "房地产业", value: 6.36 },
      { name: "采矿业", value: 4.46 },
      { name: "建筑业", value: 2.88 },
      { name: "其它", value: 11.09 }]
      let pageWord = []
      let pageWord2 = []
      list.forEach((value,key)=>{
        pageWord.push(<li key={key+"1"} className={cx('word-list', 'clearfix')}><span style={{"background":color1[key]}}></span><span>{value.name.split('、').join('/')}</span><span>{value.value}%</span></li>)

      })
      list2.forEach((value,key)=>{
        pageWord2.push(<li key={key+"2"} className={cx('word-list', 'clearfix')}><span style={{"background":color2[key]}}></span><span>{value.name.split('、').join('/')}</span><span>{value.value}%</span></li>)
      })
      
    const option1 = {
      color: ["#FFC303", "#FFD95F", "#FFE89D", "#FFF1C3", "#FCFAF2","#F0EEE8"],
      series: [
        {
          hoverAnimation:false,
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },

          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: list
        }
      ]
    }
    const option2= {
      color: ["#8294B3", "#9EB0CF", "#A9BFE4", "#BBD2FB",'#D1E1FC',"#EDF4FF"],
      series: [
        {
          hoverAnimation:false,
          name: '访问来源',
          type: 'pie',
          radius: ['45%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },

          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: list2
        }
      ]
    }
    return (
      <div className={cx('page-content')}>
        <div className={cx('content-left')}>
          <div className={cx('charts')}>
            <Echarts option={option1} style={{ height: '2rem', width: '110%', left: '-0.1rem', marginTop: '-0.15rem' }} />
          </div>
          <div className={cx('charts-word')}>
            <ul>
              {pageWord}
              
            </ul>
          </div>

        </div>
        <div className={cx('content-left')}>
          <div className={cx('charts')}>
            <Echarts option={option2} style={{ height: '2rem', width: '110%', left: '-0.1rem', marginTop: '-0.15rem' }} />
          </div>
          <div className={cx('charts-word')}>
            <ul>
              {pageWord2}
             
            </ul>
          </div></div>
      </div>

    )
  }
}
export default Page;
