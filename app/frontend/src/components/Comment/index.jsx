import PropTypes from 'prop-types'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import styles from './comment.module.scss'

const Comment = ({ key, username, text, time }) => {
    const navigate = useNavigate()

    const navigateToProfile = () => {
        navigate(routes.profile(username))
    }

    return (
        <div key={key} className={styles.container}>
            <div className={styles.header}>
                <span className={styles.username} onClick={navigateToProfile}>@{username}</span>
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
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
