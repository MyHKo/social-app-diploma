import styles from './home.module.scss'
import Sidebar from './Sidebar/Sidebar.jsx'

function Home() {

    return (
    <main className={styles.content}>
        <Sidebar />
        <section className={styles.feed}></section>
    </main>
    )
}

export default Home
