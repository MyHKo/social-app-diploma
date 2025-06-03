import Button from "@components/UiKit/Button/Button.jsx";
import styles from './loginform.module.scss'

function LoginForm() {
    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <Button text={"Log In"}/>
            <p className={styles.registerLink}>
                Don't have an account? <a>Sign up</a>
            </p>
        </form>
    )
}

export default LoginForm
