import Post from '@components/Post/index.jsx'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'
import {LoaderCircle} from 'lucide-react'
import calculateTimeDifference from '@utils/calculateTimeDifference.js'
import styles from './userposts.module.scss'

function UserPosts({ username }) {
    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch(`http://localhost:8080/users/posts/${username}`)
            .then((res) => res.json())
            .then((data) => {setPosts(data.posts)})
            .catch(err => console.log("Error while fetching user posts: ", err))
    }, []);

    return (
        <div className={styles.section}>
            <h3 className={styles.title}>Recent Posts</h3>
            {posts ?
                <div className={styles.list}>
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
                </div>
                :
                <LoaderCircle className={styles.loading}/>
            }

        </div>
    )
}

export default UserPosts

UserPosts.propTypes = {
    username: PropTypes.string.isRequired,
}
