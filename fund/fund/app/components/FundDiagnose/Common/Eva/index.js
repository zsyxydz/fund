import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';


const cx = classNames.bind(styles);

class Eva extends Component {
  constructor(props){
    super(props)

  }

  render() {
    const {data} = this.props
    // console.log(data.fund_scores)
    const titleList = []
    for (let i = 0; i < data.fund_scores.own_score.length; i++) {
      const element = data.fund_scores.own_score[i];
      titleList.push(<li key={i}><div className={cx("clearfix")}><p><span>{element.title}</span></p>
        <p className={element.tag == "优异" ? cx("red") : cx("green")}>{element.tag}</p></div></li>)
    }
    return (
      <div id="weight" className={cx("eva")}>
        <ul className={cx("clearfix")}>
          {titleList}
          
        </ul>
      </div>

    )
  }
}

Eva.propTypes = {
  data:PropTypes.object

}

Eva.defaultProps = {
  data:{}

}

export default Eva;