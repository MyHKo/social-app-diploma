import { User } from 'lucide-react'
import styles from  './sidebar.module.scss'

function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarSection}>
                <div className={styles.profileLink}>
                    <User className="icon" />
                    <span className={styles.profileText}>Profile</span>
                </div>
            </div>
            <div className={styles.sidebarSection}>
                <span className={styles.sectionTitle}>Trending Topics</span>
                <ul className={styles.trendingList}>
                    <li>#Dogs</li>
                    <li>#Cats</li>
                    <li>#Computer Science</li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar
