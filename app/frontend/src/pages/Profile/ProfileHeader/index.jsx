import styles from './profileheader.module.scss'
import PropTypes from "prop-types";

function ProfileHeader({ username, avatar }) {
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>{avatar}</div>
            <div>
                <h2 className={styles.username}>@{username}</h2>
                <p className={styles.bio}>Lover of tech, cats & coffee ☕</p>
            </div>
        </div>
    )
}

export default ProfileHeader

ProfileHeader.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string
}
