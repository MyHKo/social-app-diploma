import Post from '@components/Post/index.jsx'
import Button from '@components/UiKit/Button/Button.jsx'
import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import Comment from '@components/Comment/index.jsx'
import { useParams } from 'react-router'
import { usePostStore } from '@stores/PostStore.js'
import { LoaderCircle } from 'lucide-react'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import {useEffect, useState} from 'react'
import styles from './postPage.module.scss'

const PostPage = () => {
    const { posts } = usePostStore()
    const { id } = useParams()
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    useEffect(() => {
        const fetchPostStats = () => {
            fetch(`http://localhost:8080/posts/stats/${id}`)
                .then((res) => res.json())
                .then(data => {setPost(data.post)})
                .catch(err => console.log(err))
        }

        if(posts && posts.length > 0) {
            const foundPost = posts.find((post) => post.id === Number.parseInt(id))
            if (foundPost) {
                setPost(foundPost)
            }
            else {
                fetchPostStats()
            }
        } else {
            fetchPostStats()
        }
    }, [id, posts]);

    useEffect(() => {
        fetch(`http://localhost:8080/posts/comments/${id}`).
        then(data => {
            data.json()
                .then((data) => {
                setComments(data.comments)
            }).catch(e => {
                console.log("Error while parsing comments: ", e);
            })
        }).catch( error => {console.log("Error while fetching comments: ", error)})

    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.post_container}>
                {post.id ?
                        <Post key={post.id} postId={post.id} user={`${post.user_id.username}`} text={post.body}
                           time={calculateTimeDifference(post.created_at)}
                           title={post.title}
                           number_of_likes={post.numberOfLikes}
                           number_of_comments={post.numberOfComments}
                        />
                    :
                        <LoaderCircle className={styles.post_loading}/>
                }
            </div>

            <div className={styles.commentBox}>
            <Textarea placeholder={"Write Your comment"} value={""} />
            <Button text={"Post Comment"} />
            </div>

            <div className={styles.comment_container}>
                {comments.length > 0
                    ?
                        comments.map((comment) => (
                            <Comment text={comment.body} time={calculateTimeDifference(comment.created_at)}
                             user={comment.user.username} key={comment.id} />
                        ))
                    :
                        <div className={styles.comment_placeholder}>
                            <span>Oops.. so empty here</span>
                        </div>
                }
            </div>
        </div>
    )
}

export default PostPage
