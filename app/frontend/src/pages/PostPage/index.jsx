import Post from '@components/Post/index.jsx'
import Button from '@components/UiKit/Button/Button.jsx'
import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import Comment from '@components/Comment/index.jsx'
import { useParams } from 'react-router'
import { usePostStore } from '@stores/PostStore.js'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import {useEffect, useState} from 'react'
import styles from './postPage.module.scss'

const PostPage = () => {
    const { posts } = usePostStore()
    const { id } = useParams()
    const [comments, setComments] = useState([])

    let post = {}
    for (let i = 0; i < posts.length; i++) {
        if(posts[i].id === Number.parseInt(id)) {
            post = {...posts[i]}
            break
        }
    }

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

    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.post_container}>
                <Post key={post.id} postId={post.id} user={`${post.user_id.username}`} text={post.body}
                      time={calculateTimeDifference(post.created_at)}
                      title={post.title}
                      number_of_likes={post.numberOfLikes}
                      number_of_comments={post.numberOfComments}
                />
            </div>

            <div className={styles.commentBox}>
            <Textarea placeholder={"Write Your comment"} value={""} />
            <Button text={"Post Comment"} />
            </div>

            <div className={styles.comment_container}>
                {comments.map((comment) => (
                    <Comment text={comment.body} time={calculateTimeDifference(comment.created_at)}
                             user={comment.user.username} key={comment.id} />
                ))}
            </div>
        </div>
    );
};

export default PostPage;
