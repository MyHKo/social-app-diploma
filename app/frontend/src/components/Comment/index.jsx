import styles from './comment.module.scss'
import PropTypes from "prop-types";

const Comment = ({ key, user, text, time }) => {

    return (
        <div key={key} className={styles.container}>
            <div className={styles.header}>
                <span className={styles.username}>@{user}</span>
                <span className={styles.timestamp}>{time} ago</span>
            </div>
            <p className={styles.content}>
                {text}
            </p>
        </div>
    )
}

export default Comment

Comment.propTypes = {
    key: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
