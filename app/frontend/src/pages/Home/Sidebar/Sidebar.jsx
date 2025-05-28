import { User } from 'lucide-react'
import styles from  './sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebar_section}>
                <div className={styles.profile_link}>
                    <User className={styles.profile_icon} />
                    <span className={styles.profile_text}>Profile</span>
                </div>
            </div>
            <div className={styles.sidebar_section}>
                <span className={styles.section_title}>Trending Topics</span>
                <ul className={styles.trending_list}>
                    <li>#Dogs</li>
                    <li>#Cats</li>
                    <li>#Computer Science</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar
