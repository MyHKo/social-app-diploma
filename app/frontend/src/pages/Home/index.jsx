import Sidebar from '@components/Sidebar/Sidebar.jsx'
import Feed from './Feed/Feed.jsx'
import styles from './home.module.scss'

function Home() {

    return (
    <main className={styles.content}>
        <Sidebar />
        <Feed />
    </main>
    )
}

export default Home
