import ProfileHeader from '@pages/Profile/ProfileHeader/index.jsx'
import Stats from '@pages/Profile/Stats/index.jsx'
import UserPosts from '@pages/Profile/UserPosts/index.jsx'
import {useParams} from 'react-router'
import {useEffect, useState} from 'react'
import {LoaderCircle} from 'lucide-react'
import styles from './profile.module.scss'
import {useAuthStore} from "@stores/AuthStore.js";

function Profile() {
    const { parameterUsername } = useParams()
    const { username, isLoggedIn } = useAuthStore()
    const [userStats, setUserStats] = useState()


    useEffect(() => {
        fetch(`http://localhost:8080/users/stats/${parameterUsername}`)
            .then((data) => data.json())
            .then((data) => {setUserStats(data)})
            .catch(err => console.log("Error when fetching user data: ", err))
    }, []);

    return(
        <section className={styles.profile_container}>
            <div className={styles.profile_info_container}>
                { userStats ?
                    <span><ProfileHeader parameterUsername={parameterUsername} name={userStats.user.name} surname={userStats.user.surname}
                                         bio={userStats.user.bio}
                                         isSameUser={isLoggedIn && username === parameterUsername}/>
                    <Stats posts={userStats.numberOfPosts}
                following={userStats.numberOfFollows}
                followers={userStats.numberOfFollowers}/>
                    </span>
                    :
                    <LoaderCircle className={styles.profile_loading}/>
            }
            </div>

            <UserPosts username={parameterUsername} />
        </section>
    )
}

export default Profile
