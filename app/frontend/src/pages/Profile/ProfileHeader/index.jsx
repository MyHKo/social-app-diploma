import PropTypes from 'prop-types'
import Button from '@components/UiKit/Button/Button.jsx'
import styles from './profileheader.module.scss'

function ProfileHeader({ username, name, surname, bio, avatar }) {
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>{avatar}</div>
            <div className={styles.info}>
                <div className={styles.name_row}>
                    <h2 className={styles.name}>{`${name} ${surname}`}</h2>
                    <Button style={styles.follow_button} text="Follow"/>
                </div>
                <p className={styles.username}>@{username}</p>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    )
}

export default ProfileHeader

ProfileHeader.propTypes = {
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    avatar: PropTypes.string
}
