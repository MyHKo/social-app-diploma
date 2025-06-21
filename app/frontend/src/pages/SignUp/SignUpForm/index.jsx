import Button from '@components/UiKit/Button/Button.jsx'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import styles from './signUpForm.module.scss'

function SignUpForm() {
    const navigate = useNavigate()

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="Name" required/>
            <input type="text" placeholder="Surname" required/>
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Repeat password" required/>
            <Button text={"Sign Up"}/>
            <p className={styles.log_in_link} onClick={() => {navigate(routes.login)}}>
                Already have an account? <a>Log in</a>
            </p>
        </form>
    )
}

export default SignUpForm