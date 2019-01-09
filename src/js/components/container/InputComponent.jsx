import React,{Component} from 'react';
import PropTypes from 'prop-types';

class INPUT extends Component {
    render() {
        return <div className='input-wrapper'>
            <label htmlFor={this.props.label}>{this.props.text}</label>
            <input
                type={this.props.type}
                className='input'
                id={this.props.id}
                value={this.props.value}
                onChange={this.props.handleChange}
                required
            />
        </div>
    }
}

        INPUT.propTypes ={
        label: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired
};
    export default INPUT;