import Post from '@components/Post/index.jsx'
import ProfileHeader from '@pages/Profile/ProfileHeader/index.jsx'
import styles from './profile.module.scss'

function Profile() {
    return(
        <div className={styles.profile_container}>
            <div className={styles.profile_info_container}>
                <ProfileHeader username={"username"} />

                <div className={styles.stats}>
                    <div>
                        <p className={styles.stat_number}>34</p>
                        <p className={styles.stat_label}>Posts</p>
                    </div>
                    <div>
                        <p className={styles.stat_number}>128</p>
                        <p className={styles.stat_label}>Followers</p>
                    </div>
                    <div>
                        <p className={styles.stat_number}>97</p>
                        <p className={styles.stat_label}>Following</p>
                    </div>
                </div>
            </div>

            <div className={styles.posts_section}>
                <h3 className={styles.posts_title}>Recent Posts</h3>
                <div className={styles.posts_list}>
                    {[1, 2, 3].map((id) => (
                        <Post key={id} user={"@user"} text={"This is my first post. Loving this platform"} time={"2"} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
