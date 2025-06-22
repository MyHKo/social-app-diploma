import PropTypes from 'prop-types'
import styles from './button.module.scss'

function Button({ text, onClick, style, disabled, type }) {
    return (
        <button className={`${styles.button} ${style}`} onClick={onClick} disabled={disabled} type={type}>
            {text}
        </button>
    );
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    type: PropTypes.string,
}
