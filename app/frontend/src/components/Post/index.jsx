import {Heart, MessageCircle} from 'lucide-react'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import {useAuthStore} from '@stores/AuthStore.js'
import styles from './post.module.scss'

function Post({ key, postId, user, title, number_of_comments, number_of_likes, text, time }) {
    const { isLoggedIn, username } = useAuthStore()
    const [isLiked, setIsLiked] = useState(false)
    const [ownNumberOfLikes, setOwnNumberOfLikes] = useState(number_of_likes)
    const navigate = useNavigate()

    const toggleHeart = () => {
        if(isLoggedIn) {
            if(!isLiked){
                setIsLiked(true)
                fetch('http://localhost:8080/likes/create', {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        postId: Number.parseInt(postId)
                    })
                }).then((res) => {
                    if(res.ok){
                        return res.json()
                    }
                }).then((data) => {
                    setOwnNumberOfLikes(data)
                }).catch((e) => {
                    console.log("Error while liking: ", e)
                })
            } else {
                setIsLiked(false)
                fetch('http://localhost:8080/likes/delete', {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username,
                        postId: Number.parseInt(postId)
                    })
                }).then((res) => {
                    if(res.ok){
                        return res.json()
                    }
                }).then((data) => {
                    setOwnNumberOfLikes(data)
                }).catch((e) => {
                    console.log("Error while liking: ", e)
                })
            }
        }
        else {
            navigate(routes.login)
        }
    }

    const navigateToUserProfile = () => {
        navigate(routes.profile(user))
    }

    const navigateToPostPage = () => {
        navigate(routes.post(postId))
    }

    useEffect(() => {
        if(isLoggedIn) {
            fetch("http://localhost:8080/likes/isliking", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    postId: Number.parseInt(postId),
                })
            }).then((response) => {
                if (response.ok) {
                    return response.text()
                }
            }).then((text) => {
                if (text.includes("Like not found")) {
                    setIsLiked(false)
                } else {
                    setIsLiked(true)
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    }, []);

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
                    <span className={styles.number_of_interactions}>{ownNumberOfLikes}</span>
                </div>

                <div className={styles.comment_icon_container} onClick={navigateToPostPage}>
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
