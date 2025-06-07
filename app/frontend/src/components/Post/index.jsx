import {Heart, MessageCircle} from 'lucide-react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import styles from './post.module.scss'

function Post({ key, user, text, time, likes, comments}) {
    const [isLiked, setIsLiked] = useState(false)

    const toggleHeart = () => {
        setIsLiked(!isLiked)
    }

    return (
        <div className={styles.post} key={key}>
            <div className={styles.post_header}>
                <span className={styles.username}>@{user}</span>
                <span className={styles.timestamp}>{time} ago</span>
            </div>
            <p className={styles.post_content}>
                {text}
            </p>
            <div className={styles.post_actions}>
                <div className={styles.heart_icon_container} onClick={toggleHeart}>
                    <Heart className={`${styles.heart_icon} ${isLiked ? styles.liked : ''}`}/>
                    <span className={styles.number_of_interactions}>{likes}</span>
                </div>

                <div className={styles.comment_icon_container}>
                    <MessageCircle className={styles.comment_icon}/>
                    <span className={styles.number_of_interactions}>{comments}</span>
                </div>
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
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
}
