import SignUpForm from '@pages/SignUp/SignUpForm/index.jsx'
import styles from './signup.module.scss'

function SignUp() {
    return (
        <div className={styles.sign_up_container}>
            <div className={styles.sign_up_box}>
                <h1>
                    Register <span>Now</span>
                </h1>
                <SignUpForm/>
            </div>
        </div>
    )
}

export default SignUp
