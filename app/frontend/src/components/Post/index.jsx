import {Heart, MessageCircle} from 'lucide-react'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import styles from './post.module.scss'

function Post({ key, postId, user, text, time }) {
    const [isLiked, setIsLiked] = useState(false)
    const [numberOfComments, setNumberOfComments] = useState(0)
    const [numberOfLikes, setNumberOfLikes] = useState(0)

    const toggleHeart = () => {
        setIsLiked(!isLiked)
    }

    useEffect(() => {
        fetch(`http://localhost:8080/posts/stats/${postId}`)
            .then(response => response.json())
            .then(data => {
                setNumberOfLikes(data.numberOfLikes)
                setNumberOfComments(data.numberOfComments)
            })
            .catch(error => console.error('Error fetching post:', error));
    }, []);

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
                    <span className={styles.number_of_interactions}>{numberOfLikes}</span>
                </div>

                <div className={styles.comment_icon_container}>
                    <MessageCircle className={styles.comment_icon}/>
                    <span className={styles.number_of_interactions}>{numberOfComments}</span>
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
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}
