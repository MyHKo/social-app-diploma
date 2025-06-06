import PropTypes from 'prop-types'
import styles from './button.module.scss'

function Button({ text, onClick, style }) {
    return (
        <button className={`${styles.button} ${style}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
}
