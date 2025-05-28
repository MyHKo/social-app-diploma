import Header from '@components/Header/Header.jsx'
import AppRoutes from './router/AppRoutes.jsx'
import styles from './app.module.scss'

function App() {

  return (
    <div className={styles.main_container}>
     <Header />
     <AppRoutes />
    </div>
  )
}

export default App
