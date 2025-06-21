import { User } from 'lucide-react'
import { useNavigate } from 'react-router'
import routes from '@routes/path.js'
import styles from './sidebar.module.scss'

function Sidebar() {
    const navigate = useNavigate()

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_section}>
                <div className={styles.profile_link}>
                    <User />
                    <span className={styles.profile_text} onClick={() => {navigate(routes.profile)}}>Profile</span>
                </div>
            </div>
            <div className={styles.sidebar_section}>
                <span className={styles.section_title}>Trending Topics</span>
                <ul className={styles.trending_list}>
                    <li className={styles.trending_item}>#Dogs</li>
                    <li className={styles.trending_item}>#Cats</li>
                    <li className={styles.trending_item}>#Computer Science</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar
