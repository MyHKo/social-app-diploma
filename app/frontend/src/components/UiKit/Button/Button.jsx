import PropTypes from 'prop-types'
import styles from './button.module.scss'

function Button({ text, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
