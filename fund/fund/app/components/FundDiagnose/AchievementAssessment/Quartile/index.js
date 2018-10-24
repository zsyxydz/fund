import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styles from './style.css';
import classNames from 'classnames/bind';
import SectionContainer from '../../../Common/SectionContainer'
const cx = classNames.bind(styles)
class Quartile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            per_evaluation:{},
            tabData:[]
        }
        this.timeTab=this.timeTab.bind(this)
    }
    componentDidMount(){
        const {data} = this.props
        this.setState({
            per_evaluation :data.per_evaluation,
            tabData:data.per_evaluation.short_term
          })
    }
    timeTab(value) {
        let _self = this
        let {per_evaluation} = this.state
        value === "短期" ? _self.setState({ tabData: per_evaluation.short_term }) : ""
        value === "长期" ? _self.setState({ tabData: per_evaluation.long_term }) : ""
      }
    render() {
        const {tabData} = this.state
        const num = tabData.length
        const list = []
        let gradeClass = 'Four-four'

        for (let i = 0; i < tabData.length; i++) {
            const element = tabData[i];
            switch (element.four_points) {
                case 1:
                    gradeClass = 'Four-one'
                    break
                case 2:
                    gradeClass = 'Four-two'
                    break
                case 3:
                    gradeClass = 'Four-three'
                    break
                case 4:
                    gradeClass = 'Four-four'
                    break

            }

            list.push(<li key={i} className={cx('Four-box', gradeClass)}>
                <span>优异</span>
                <span>良好</span>
                <span>一般</span>
                <span>较差</span>
                <span>{element.yeild}</span>
            </li>)
        }

       
        return (
            <SectionContainer titleType="text" sectionTitle="业绩四分位" sectionTitleIconSrc="Achievement/Ach-sfw.png" onTabChanged={this.timeTab} rightSideType="switch" rightSideValues={["短期", "长期"]} >
                <div className={cx('Four', 'clearfix')}>
                <ul className={cx('Four-list','clearfix')} style={{width:num*0.65+'rem'}}>
                    {list}
                    
                </ul>
            </div>
        </SectionContainer>
            
        )
    }
}
Quartile.PropTypes={
    data:PropTypes.array
}

export default Quartile