import PostCreator from '@components/PostCreator/PostCreator.jsx'
import Post from '@components/Post/index.jsx'
import {usePostStore} from '@stores/PostStore.js'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import styles from './feed.module.scss'

function Feed() {
    const { posts, fetchData}  = usePostStore()

    fetchData()

    return (
        <section className={styles.feed}>
            <PostCreator />

            {posts.map((post) => (
                <Post key={post.id} postId={post.id} user={`${post.user_id.username}`} text={post.body}
                      time={calculateTimeDifference(post.created_at)}
                      title={post.title}
                      number_of_likes={post.numberOfLikes}
                      number_of_comments={post.numberOfComments}
                />
            ))}
        </section>
    );
}

export default Feed
