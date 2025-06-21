import styles from './login.module.scss'
import LogInForm from "@pages/LogIn/LogInForm/index.jsx";

function LogIn() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1 className={styles.title}>
                    Social<span className={styles.title_second_part}>Sphere</span>
                </h1>
                <LogInForm />
            </div>
        </div>
    )
}

export default LogIn
