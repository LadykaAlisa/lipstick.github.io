import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = (props) => {
        const { text, backgroundColor, onClick, className } = props;

        const styles = {
            backgroundColor
        }
        return (
            <button className={className} style={styles} onClick={onClick}>{text}</button>
        );

}
Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    backgroundColor: 'white'

}
export default Button;