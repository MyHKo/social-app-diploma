import ProfileHeader from '@pages/Profile/ProfileHeader/index.jsx'
import Stats from '@pages/Profile/Stats/index.jsx'
import UserPosts from '@pages/Profile/UserPosts/index.jsx'
import {useParams} from 'react-router'
import {useEffect, useState} from 'react'
import styles from './profile.module.scss'

function Profile() {
    const { username } = useParams()
    const [userStats, setUserStats] = useState({})

    useEffect(() => {
        fetch(`http://localhost:8080/users/stats/${username}`)
            .then((data) => data.json())
            .then((data) => {setUserStats(data)})
            .catch(err => console.log("Error when fetching user data: ", err))
    }, []);

    return(
        <div className={styles.profile_container}>
            <div className={styles.profile_info_container}>
                <ProfileHeader username={username} name={userStats.name} surname={userStats.surname} />

                <Stats posts={userStats.numberOfPosts}
                       likes={userStats.numberOfLikes}
                       followers={userStats.numberOfFollowers}/>
            </div>

            <UserPosts username={"username"} />
        </div>
    )
}

export default Profile
