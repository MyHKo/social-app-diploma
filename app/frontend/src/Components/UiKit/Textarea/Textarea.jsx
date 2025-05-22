import styles from '/src/Components/UiKit/Textarea/textarea.module.scss'
import PropTypes from "prop-types";

 function Textarea({ value, placeholder }) {
    return <textarea className={styles.textarea} value={value} placeholder={placeholder} />;
}

export default Textarea

Textarea.propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}
