import PropTypes from 'prop-types'
import styles from './stats.module.scss'

function Stats( { posts, followers, following }) {

    return (
        <div className={styles.stats}>
            <div>
                <p className={styles.stat_number}>{posts}</p>
                <p className={styles.stat_label}>Posts</p>
            </div>
            <div>
                <p className={styles.stat_number}>{followers}</p>
                <p className={styles.stat_label}>Followers</p>
            </div>
            <div>
                <p className={styles.stat_number}>{following}</p>
                <p className={styles.stat_label}>Following</p>
            </div>
        </div>
    )
}

export default Stats

Stats.propTypes = {
    posts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
}
