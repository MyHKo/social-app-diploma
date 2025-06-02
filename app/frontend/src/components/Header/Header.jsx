import Button from '@components/UiKit/Button/Button.jsx'
import { useNavigate } from 'react-router'
import routes from '/src/router/path.js'
import styles from './header.module.scss'

function Header() {
    const navigate = useNavigate()

    return (
        <header className={styles.header}>
            <h1 className={styles.siteTitle} onClick={() => {navigate(routes.home)}}>SocialSphere</h1>
            <div className={styles.loginButtonWrapper}>
                <Button text={"Log In"} onClick={() => {navigate(routes.login)}}/>
            </div>
        </header>
    );
}

export default Header
