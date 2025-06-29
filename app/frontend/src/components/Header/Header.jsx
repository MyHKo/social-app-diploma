import Button from '@components/UiKit/Button/Button.jsx'
import { useNavigate } from 'react-router'
import routes from '@routes/path.js'
import { useAuthStore } from '@stores/AuthStore.js'
import styles from './header.module.scss'

function Header() {
    const navigate = useNavigate()
    const { isLoggedIn, logOut } = useAuthStore()

    return (
        <header className={styles.header}>
            <h1 className={styles.siteTitle} onClick={() => {navigate(routes.home)}}>
                Social<span>Sphere</span>
            </h1>
            <div className={styles.loginButtonWrapper}>
                {isLoggedIn
                    ? <Button text={"Log Out"} style={styles.logOutButton}
                              onClick={() => {logOut()}}/>
                    : <Button text={"Log In"} onClick={() => {navigate(routes.login)}}/>}
            </div>
        </header>
    );
}

export default Header
