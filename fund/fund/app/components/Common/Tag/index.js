import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

class Tag extends Component{
  render (){
    const { text, theme, mgStyleName } = this.props;
    var tagClass = null;
    if (theme == "blue"){
      tagClass = cx('tag-blue', mgStyleName);
    } else {
      tagClass = cx('tag-grey', mgStyleName);
    }
    return (
      <label className={tagClass}>{text}</label>
    )
  }
}

Tag.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  mgStyleName: PropTypes.string
}

Tag.defaultProps = {
  text: "",
  theme: "blue",
  mgStyleName: 'mgr-mgb-4'
}

export default Tag;