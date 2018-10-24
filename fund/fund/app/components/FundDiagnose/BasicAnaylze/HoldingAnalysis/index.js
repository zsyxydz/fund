import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import SectionContainer from '../../../Common/SectionContainer'
import AnalyzeEcharts from './AnalyzeEcharts'
import OpenInterest from './OpenInterest'
import IndustryPage from './IndustryPage'
import TabCommon from '../../../Common/TabCommon'


const cx = classNames.bind(styles);

class BasicPosition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analyze: 'change'
        }
    }
    componentWillMount() {
        this.onSelectedChangeHandler = this.onSelectedChangeHandler.bind(this);
    }
    onSelectedChangeHandler(value) {
        let _self = this
        _self.state.analyze = value
        value === "资产类型" ? _self.setState({ analyze: "type" }) : ""
        value === "行业配置" ? _self.setState({ analyze: "page" }) : ""
        value === "仓位变化" ? _self.setState({ analyze: "change" }) : ""
    }
    render() {

        const { data } = this.props
        const { analyze } = this.state
        const ANALYZE = {
            change: <AnalyzeEcharts fundData={data.basic_analyze} />,
            type: <OpenInterest fundData={data.basic_analyze} />,
            page: <IndustryPage fundData={data.basic_analyze} />
        }

        return (
            <SectionContainer titleType="text" sectionTitle="持仓分析" sectionTitleIconSrc="OpenInterest/insterest@3x.png" rightSideType="only" >
                <TabCommon onSelectChanged={this.onSelectedChangeHandler} titles={["仓位变化", "资产类型", "行业配置"]} content={ANALYZE[analyze]} />
            </SectionContainer>
        )
    }
}

BasicPosition.propTypes = {
    newComponents: PropTypes.element,
    content: PropTypes.string,
    data: PropTypes.object
}

BasicPosition.defaultProps = {
    newComponents: null,
    content: "较大"
}

export default BasicPosition;