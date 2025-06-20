import ProfileHeader from '@pages/Profile/ProfileHeader/index.jsx'
import Stats from '@pages/Profile/Stats/index.jsx'
import UserPosts from '@pages/Profile/UserPosts/index.jsx'
import {useParams} from 'react-router'
import {useEffect, useState} from 'react'
import {LoaderCircle} from 'lucide-react'
import styles from './profile.module.scss'

function Profile() {
    const { username } = useParams()
    const [userStats, setUserStats] = useState()

    useEffect(() => {
        fetch(`http://localhost:8080/users/stats/${username}`)
            .then((data) => data.json())
            .then((data) => {setUserStats(data)})
            .catch(err => console.log("Error when fetching user data: ", err))
    }, []);

    return(
        <section className={styles.profile_container}>
            <div className={styles.profile_info_container}>
                { userStats ?
                    <span><ProfileHeader username={username} name={userStats.user.name} surname={userStats.user.surname}
                                         bio={userStats.user.bio}/>
                    <Stats posts={userStats.numberOfPosts}
                following={userStats.numberOfFollows}
                followers={userStats.numberOfFollowers}/>
                    </span>
                    :
                    <LoaderCircle className={styles.profile_loading}/>
            }
            </div>

            <UserPosts username={username} />
        </section>
    )
}

export default Profile
