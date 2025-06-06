import PostCreator from '@components/PostCreator/PostCreator.jsx'
import Post from '@components/Post/index.jsx'
import {usePostStore} from '@stores/PostStore.js'
import styles from './feed.module.scss'

function Feed() {
    const { posts}  = usePostStore()

    const calculateTimeDifference = (time) => {
        const givenTime = new Date(time)
        const now = new Date()
        const diff = (now - givenTime) / 1000

        if (diff < 3600) {
            return `${Math.floor(diff / 60)}m`
        } else if (diff < 24 * 3600) {
            return `${Math.floor(diff / 3600)}h`
        } else {
            return `${Math.floor(diff / (24 * 3600))}d`
        }
    }

    return (
        <section className={styles.feed}>
            <PostCreator />

            {posts.map((post) => (
                <Post key={post.id} user={`${post.user_id.username}`} text={post.body} time={calculateTimeDifference(post.created_at)} />
            ))}
        </section>
    );
}

export default Feed
