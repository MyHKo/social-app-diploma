import PostCreator from '@components/PostCreator/PostCreator.jsx'
import styles from './feed.module.scss'
import Post from '@components/Post/index.jsx'

function Feed() {
    return (
        <section className={styles.feed}>
            <PostCreator />

            {[1, 2, 3].map((id) => (
                <Post key={id} user={"@user"} text={"This is my first post. Loving this platform"} time={"2"} />
            ))}
        </section>
    );
}

export default Feed
