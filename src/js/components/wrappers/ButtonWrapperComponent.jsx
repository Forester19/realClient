import React from 'react';
import PropTypes from 'prop-types';

export default class ButtonWrapperComponent extends React.Component{
    render() {
        return <button className={this.props.className} onClick={this.props.onClick}>
            {this.props.text}
        </button>
    }
}

ButtonWrapperComponent.propTypes = {
  text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};