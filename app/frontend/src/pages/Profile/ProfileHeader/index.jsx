import PropTypes from 'prop-types'
import Button from '@components/UiKit/Button/Button.jsx'
import {useAuthStore} from '@stores/AuthStore.js'
import styles from './profileheader.module.scss'
import {useEffect, useState} from "react";

function ProfileHeader({ parameterUsername, name, surname, bio, isSameUser }) {
    const { isLoggedIn, username } = useAuthStore()
    const [isFollowing, setIsFollowing] = useState(false)

    const handleFollowClick = () => {
        if(isLoggedIn && !isSameUser){
            if(!isFollowing) {
                fetch('http://localhost:8080/users/follow', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subscriber: username,
                        subscribee: parameterUsername
                    })
                }).then(() => {
                    window.location.reload();
                })
                    .catch((e) => {
                        console.log("Error while following a user: ", e)
                    })
            } else {
                fetch('http://localhost:8080/users/unfollow', {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        subscriber: username,
                        subscribee: parameterUsername
                    })
                }).then(() => {
                    window.location.reload()
                })
                    .catch((e) => {
                        console.log("Error while unfollowing a user: ", e)
                    })
            }
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
    })

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
}
