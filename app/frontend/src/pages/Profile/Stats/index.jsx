import PropTypes from 'prop-types'
import styles from './stats.module.scss'

function Stats( { username }) {

    //TODO add fetching of the user stats
    return (
        <div className={styles.stats}>
            <div>
                <p className={styles.stat_number}>34</p>
                <p className={styles.stat_label}>Posts</p>
            </div>
            <div>
                <p className={styles.stat_number}>128</p>
                <p className={styles.stat_label}>Followers</p>
            </div>
            <div>
                <p className={styles.stat_number}>97</p>
                <p className={styles.stat_label}>Following</p>
            </div>
        </div>
    )
}

export default Stats

Stats.propTypes = {
    username: PropTypes.string.isRequired,
}
