import Button from '@components/UiKit/Button/Button.jsx'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import styles from './loginform.module.scss'

function LoginForm() {
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <Button text={"Log In"}/>
            <p className={styles.registerLink} onClick={() => {navigate(routes.signup)}}>
                Don't have an account? <a>Sign up</a>
            </p>
        </form>
    )
}

export default LoginForm
