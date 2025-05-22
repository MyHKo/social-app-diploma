import Button from '@components/UiKit/Button/Button.jsx'
import styles from './header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.siteTitle}>SocialSphere</h1>
            <div className={styles.loginButtonWrapper}>
                <Button text={"Log In"} />
            </div>
        </header>
    );
}

export default Header
