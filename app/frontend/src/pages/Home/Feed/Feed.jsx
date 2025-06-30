import PostCreator from '@components/PostCreator/PostCreator.jsx'
import Post from '@components/Post/index.jsx'
import {usePostStore} from '@stores/PostStore.js'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import {useEffect} from 'react'
import {useAuthStore} from '@stores/AuthStore.js'
import styles from './feed.module.scss'

function Feed() {
    const { posts, fetchData}  = usePostStore()
    const { isLoggedIn } = useAuthStore()

    useEffect(() => {
        fetchData(posts)
    }, []);

    return (
        <section className={styles.feed}>
            {isLoggedIn
                ?<div className={styles.post_creator_container}> <PostCreator/> </div>
                : ""}

            <ul className={styles.post_list}>
            {posts.map((post) => (
                <li className={styles.post_container} key={post.id}>
                <Post key={post.id} postId={post.id} user={`${post.user_id.username}`} text={post.body}
                      time={calculateTimeDifference(post.created_at)}
                      title={post.title}
                      number_of_likes={post.numberOfLikes}
                      number_of_comments={post.numberOfComments}
                />
                </li>
            ))}
            </ul>
        </section>
    );
}

export default Feed
