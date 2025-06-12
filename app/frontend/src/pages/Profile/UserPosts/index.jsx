import Post from '@components/Post/index.jsx'
import PropTypes from 'prop-types'
import styles from './userposts.module.scss'

function UserPosts({ username }) {
    return (
        <div className={styles.posts_section}>
            <h3 className={styles.posts_title}>Recent Posts</h3>
            <div className={styles.posts_list}>
                {[1, 2, 3].map((id) => (
                    <Post key={id} user={"@user"} title={"My first post"} text={"This is my first post. Loving this platform"} time={"2"}/>
                ))}
            </div>
        </div>
    )
}

export default UserPosts

UserPosts.propTypes = {
    username: PropTypes.string.isRequired,
}
