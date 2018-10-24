import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import ItemButton from './ItemButton';
import TabCommon from './Common/TabCommon/index'
import SectionContainer from './Common/SectionContainer/index'
import FundScale from './FundDiagnose/BasicAnaylze/FundScale/index'
import Handler from './FundDiagnose/BasicAnaylze/FundHandler/index'
import Company from './FundDiagnose/BasicAnaylze/Company/index'
const cx = classNames.bind(styles);

class SectionSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {
        const { titles, isLoading, content } = this.props;
        return (
            <div>
                
                
                
               
            
            </div>
        );
    }
}

SectionSwitch.propTypes = {
   
}

SectionSwitch.defaultProps = {
  
}

export default SectionSwitch;