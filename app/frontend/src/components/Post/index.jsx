import {Heart, MessageCircle} from 'lucide-react'
import PropTypes from 'prop-types'
import {useState} from 'react'
import {useNavigate} from 'react-router'
import routes from '../../router/path.js'
import styles from './post.module.scss'

function Post({ key, postId, user, title, number_of_comments, number_of_likes, text, time }) {
    const [isLiked, setIsLiked] = useState(false)
    const navigate = useNavigate()

    const toggleHeart = () => {
        setIsLiked(!isLiked)
    }

    const navigateToUserProfile = () => {
        navigate(routes.profile(user))
    }

    const navigateToPostPage = () => {
        navigate(routes.post(postId))
    }

    return (
        <div className={styles.post} key={key}>
            <div className={styles.post_header}>
                <span className={styles.username} onClick={navigateToUserProfile}>@{user}</span>
                <span className={styles.timestamp}>{time} ago</span>
            </div>
            <h2 className={styles.post_title} onClick={navigateToPostPage}>{title}</h2>
            <p className={styles.post_content}>
                {text}
            </p>
            <div className={styles.post_actions}>
                <div className={styles.heart_icon_container} onClick={toggleHeart}>
                    <Heart className={`${styles.heart_icon} ${isLiked ? styles.liked : ''}`}/>
                    <span className={styles.number_of_interactions}>{number_of_likes}</span>
                </div>

                <div className={styles.comment_icon_container}>
                    <MessageCircle className={styles.comment_icon}/>
                    <span className={styles.number_of_interactions}>{number_of_comments}</span>
                </div>
        </div>
        </div>
    )
}

export default Post

Post.propTypes = {
    key: PropTypes.number.isRequired,
    postId: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    number_of_comments: PropTypes.number.isRequired,
    number_of_likes: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
