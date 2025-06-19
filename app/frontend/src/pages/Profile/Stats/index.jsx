import PropTypes from 'prop-types'
import styles from './stats.module.scss'

function Stats( { posts, followers, likes }) {

    return (
        <div className={styles.stats}>
            <div>
                <p className={styles.stat_number}>34</p>
                <p className={styles.stat_label}>{posts}</p>
            </div>
            <div>
                <p className={styles.stat_number}>128</p>
                <p className={styles.stat_label}>{followers}</p>
            </div>
            <div>
                <p className={styles.stat_number}>97</p>
                <p className={styles.stat_label}>{likes}</p>
            </div>
        </div>
    )
}

export default Stats

Stats.propTypes = {
    posts: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}
