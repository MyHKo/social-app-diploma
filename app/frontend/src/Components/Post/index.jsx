import styles from './post.module.scss'
import {Heart, MessageCircle} from 'lucide-react'
import PropTypes from 'prop-types'

function Post({ key, user, text, time }) {
    return (
        <div className={styles.post} key={key}>
            <div className={styles.postHeader}>
                <span className={styles.username}>@{user}</span>
                <span className={styles.timestamp}>{time}h ago</span>
            </div>
            <p className={styles.postContent}>
                {text}
            </p>
            <div className={styles.postActions}>
                <Heart className={styles.icon}/>
                <MessageCircle className={styles.icon}/>
            </div>
        </div>
    )
}

export default Post

Post.propTypes = {
    key: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
