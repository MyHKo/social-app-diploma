import Post from '@components/Post/index.jsx'
import Button from '@components/UiKit/Button/Button.jsx'
import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import Comment from '@components/Comment/index.jsx'
import Sidebar from '@components/Sidebar/Sidebar.jsx'
import { useParams } from 'react-router'
import { usePostStore } from '@stores/PostStore.js'
import { LoaderCircle } from 'lucide-react'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import {useEffect, useRef, useState} from 'react'
import { useAuthStore } from '@stores/AuthStore.js'
import styles from './postPage.module.scss'

const PostPage = () => {
    const { isLoggedIn, username } = useAuthStore()
    const { posts } = usePostStore()
    const { id } = useParams()
    const commentRef = useRef(null)
    const [comments, setComments] = useState([])
    const [post, setPost] = useState({})

    const handleCommentPost = () => {
        const text = commentRef.current.value.replace(/<[^>]*>?/gm, '')
        fetch("http://localhost:8080/posts/comments/create", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                postId: Number.parseInt(id),
                text: text
            }),
        }).then((res) => {
            if(res.ok){
                return res.json()
            }
        }).then((obj) => {
            setPost((prevState) => {
                return {comments: obj.comments, ...prevState}
            })
        }).catch((e) => {
            console.log("Error while creating a comment: ", e)
        })
    }

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
            <Sidebar/>

            <main className={styles.content_container}>
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

                { isLoggedIn
                    ? <div className={styles.comment_creator}>
                        <Textarea placeholder={"Write Your comment"} ref={commentRef}/>
                        <Button text={"Post Comment"} onClick={handleCommentPost}/>
                    </div>
                    : ""}

                <ul className={styles.comments_container}>
                        {comments.length > 0
                        ?
                            comments.map((comment) => (
                                <Comment text={comment.body} time={calculateTimeDifference(comment.created_at)}
                                         username={comment.user.username} key={comment.id} />
                            ))
                        :
                            <div className={styles.comment_placeholder}>
                                <span>Oops.. so empty here</span>
                            </div>
                    }
                </ul>
            </main>
        </div>
    )
}

export default PostPage
