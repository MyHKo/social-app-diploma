import Button from '@components/UiKit/Button/Button.jsx'
import { useNavigate } from 'react-router'
import routes from '@routes/path.js'
import { useAuthStore } from '@stores/AuthStore.js'
import styles from './header.module.scss'

function Header() {
    const navigate = useNavigate()
    const { isLoggedIn, setIsLoggedIn } = useAuthStore()

    return (
        <header className={styles.header}>
            <h1 className={styles.siteTitle} onClick={() => {navigate(routes.home)}}>
                Social<span>Sphere</span>
            </h1>
            <div className={styles.loginButtonWrapper}>
                {isLoggedIn
                    ? <Button text={"Log In"} onClick={() => {navigate(routes.login)}}/>
                    : <Button text={"Log Out"} style={styles.logOutButton}
                              onClick={() => {console.log("user was logged out")}}/>}
            </div>
        </header>
    );
}

export default Header
