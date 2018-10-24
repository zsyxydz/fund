import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';
import $ from '../../../../lib/jquery/dist/jquery'


const cx = classNames.bind(styles);
const tan = require('../../../../images/Common/icon_info@3x.png')
class Shares extends Component {
    constructor(props) {
        super(props)

        this.pop = this.pop.bind(this)
    }
    pop() {
        const { func } = this.props
        func('show')
    }

    render() {
        const { top } = this.props

        return (
            <div className={cx("s_shares")} >
                <a className={cx("score_rule")}  style={{"top":top}} onClick={() => {
                    this.pop()
                }}><span>打分规则</span><img src={tan}></img></a>

            </div>

        )
    }
}

Shares.propTypes = {
    func: PropTypes.func,
    top:PropTypes.string
}

Shares.defaultProps = {

}

export default Shares;