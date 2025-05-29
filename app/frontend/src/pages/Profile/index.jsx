import ProfileHeader from '@pages/Profile/ProfileHeader/index.jsx'
import Stats from '@pages/Profile/Stats/index.jsx'
import UserPosts from '@pages/Profile/UserPosts/index.jsx'
import styles from './profile.module.scss'

function Profile() {
    return(
        <div className={styles.profile_container}>
            <div className={styles.profile_info_container}>
                <ProfileHeader username={"username"} />

                <Stats username={"username"}/>
            </div>

            <UserPosts username={"username"} />
        </div>
    )
}

export default Profile
