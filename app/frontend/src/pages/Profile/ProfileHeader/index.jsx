import PropTypes from 'prop-types'
import Button from '@components/UiKit/Button/Button.jsx'
import {useAuthStore} from '@stores/AuthStore.js'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import styles from './profileheader.module.scss'

function ProfileHeader({ parameterUsername, name, surname, bio, isSameUser, setUserStats}) {
    const { isLoggedIn, username } = useAuthStore()
    const [isFollowing, setIsFollowing] = useState(false)
    const navigate = useNavigate()

    const handleFollowClick = () => {
        if(isLoggedIn && !isSameUser){
                fetch(`http://localhost:8080/users/${isFollowing ? "unfollow" : "follow"}`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subscriber: username,
                        subscribee: parameterUsername
                    })
                }).then((res) => {
                    if(res.ok){
                        return res.json()
                    }
                }).then((data) => {
                    setIsFollowing(prevState => !prevState)
                    setUserStats((prevState) => {
                        return { ...prevState, numberOfFollowers: data}
                    })
                }).catch((e) => {
                        console.log("Error while following a user: ", e)
                    })
        } else {
            navigate(routes.login)
        }
    }

    useEffect(() => {
        if(isLoggedIn && !isSameUser){
            fetch('http://localhost:8080/users/isfollowing', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    subscriber: username,
                    subscribee: parameterUsername
                })
            }).then((res) => {
                if(res.ok){
                    setIsFollowing(true)
                }
            }).catch((e) => {console.log("Unexpected error ", e)})
        }
    }, [])

    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <div className={styles.name_row}>
                    <h2 className={styles.name}>{`${name} ${surname}`}</h2>
                    {isSameUser ? "" :<Button style={styles.follow_button}
                                              onClick={handleFollowClick}
                                              text={isFollowing ? "Unfollow" : "Follow"}/>}
                </div>
                <p className={styles.username}>@{parameterUsername}</p>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    )
}

export default ProfileHeader

ProfileHeader.propTypes = {
    parameterUsername: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isSameUser: PropTypes.bool.isRequired,
    setUserStats: PropTypes.func.isRequired
}
