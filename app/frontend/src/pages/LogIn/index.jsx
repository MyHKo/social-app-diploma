import styles from './login.module.scss'

function LogIn() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginBox}>
                <h1>
                    Social<span>Sphere</span>
                </h1>
                <form>
                    <input type="text" placeholder="Username or Email" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="submit">Log In</button>
                    <p className={styles.registerLink}>
                        Don't have an account? <a href="#">Sign up</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LogIn
