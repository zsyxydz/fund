
import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../Common/SectionContainer'
import TabCommon from '../../Common/TabCommon'
import Change from './Change'
import Page from './Page'
import Type from './Type'



const cx = classNames.bind(styles);
class Analyze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      analyze:'change'
    }
    this.onSelectedChangeHandler = this.onSelectedChangeHandler.bind(this)
  }
  onSelectedChangeHandler(value){
    let _self = this
    _self.state.analyze = value
    value === "资产类型" ? _self.setState({ analyze: "type" }) : ""
    value === "行业配置" ? _self.setState({ analyze: "page" }) : ""
    value === "仓位变化" ? _self.setState({ analyze: "change" }) : ""
  }
  render() {
    

    const { analyze } = this.state
    const ANALYZE={
      'change':<Change />,
      'type':<Type />,
      'page':<Page />,
    }
    return (
      <SectionContainer titleType="text" sectionTitle="持仓分析" sectionTitleIconSrc="Common/c-pk.png" rightSideType="only">
        <TabCommon onSelectChanged={this.onSelectedChangeHandler} titles={["仓位变化", "资产类型", "行业配置"]} content={ANALYZE[analyze]} />
      </SectionContainer>

    )
  }
}
export default Analyze;
