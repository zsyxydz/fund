
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';



const cx = classNames.bind(styles);
class Type extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let b ={
      fundOne :{
        "买入返售证券": {name: "买入返售证券", width: "3.81%"},
        "其它资产": {name: "其它资产", width: "0.33%"},
        "股票": {name: "股票", width: "90.96%"},
        "货币资金": {name: "货币资金", width: "6.27%"}
      },
      fundTwo:{
        "买入返售证券": {name: "买入返售证券", width: "5.03%"},
        "其它资产": {name: "其它资产", width: "0.56%"},
        "股票": {name: "股票", width: "84.33%"},
        "货币资金": {name: "货币资金", width: "10.08%"}
      }
    }
    let ss = {
      "买入返售证券":{
        one:'3.81%',
        two:"5.03%"
      },
      "货币资金":{
        one:'6.27%',
        two:"10.08%"
      },
      "股票":{
        one:'90.96%',
        two:"84.33%"
      },
      "其它资产":{
        one:'0.33%',
        two:"0.56%"
      }
    }
    

    let list=[]
    let listname=[]
    for (let i in ss){
      list.push(<li key={i+"3"}><span style={{height:ss[i].one}}></span><span style={{height:ss[i].two}}></span></li>)
      listname.push(<li key={i+"4"}>{i}</li>)
    }
    return (
      <div>
        <div className={cx('title','clearfix')}><span><span className={cx('square-l')}></span><span  className={cx('title-name')}>富国中证</span></span><span><span className={cx('square-r')}></span><span  className={cx('title-name')}>易方达50</span></span></div>
        <div>
          <ul className={cx('pieEcharts','clearfix')}>
          {list}
            
          </ul>
          <ul  className={cx('name','clearfix')}>
          {listname}
           
          </ul>
        </div>
      </div>

    )
  }
}
export default Type;
