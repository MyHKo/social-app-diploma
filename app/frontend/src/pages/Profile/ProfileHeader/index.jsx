import styles from './profileheader.module.scss'
import PropTypes from "prop-types";
import Button from "@components/UiKit/Button/Button.jsx";

function ProfileHeader({ username, avatar }) {
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>{avatar}</div>
            <div className={styles.info}>
                <div className={styles.name_row}>
                    <h2 className={styles.name}>John Doe</h2>
                    <Button style={styles.follow_button} text="Follow"/>
                </div>
                <p className={styles.username}>@{username}</p>
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
