import PropTypes from 'prop-types'
import styles from './button.module.scss'

function Button({ text }) {
    return (
        <button className={styles.button}>
            {text}
        </button>
    );
}

export default Button

Button.propTypes = {
    text: PropTypes.string.isRequired,
}
