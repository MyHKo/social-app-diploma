import Button from '@components/UiKit/Button/Button.jsx'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import schema from './schema.js'
import styles from './signUpForm.module.scss'

function SignUpForm() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid}
    } = useForm({
        resolver: zodResolver(schema()),
        mode: 'onChange',
        defaultValues: {
            name: '',
            surname: '',
            username: '',
            password: '',
            confirmPassword: '',
        }
    })

    const onSubmit = (data) => {
        fetch("http://localhost:8080/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if(res.ok) {
                    console.log(res)
                }
            })
            .catch((err) => {
                console.log("An error when registering a user: ", err)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <li className={styles.input_wrapper}>
                <input {...register("name")} type="text" placeholder="Name"
                       className={errors.name
                           ? `${styles.invalid}`
                           : ``}/>
                <span className={styles.error_message}>{errors.name?.message}</span>
            </li>

            <li className={styles.input_wrapper}>
                <input {...register("surname")} type="text" placeholder="Surname"
                       className={errors.surname
                           ? `${styles.invalid}`
                           : ``}/>
                <span className={styles.error_message}>{errors.surname?.message}</span>
            </li>

            <li className={styles.input_wrapper}>
                <input {...register("username")} type="text" placeholder="Username"
                       className={errors.username
                           ? `${styles.invalid}`
                           : ``}/>
                <span className={styles.error_message}>{errors.username?.message}</span>
            </li>

            <li className={styles.input_wrapper}>
                <input {...register("password")} type="password" placeholder="Create password"
                       className={errors.password
                           ? `${styles.create_password}  ${styles.invalid}`
                           : `${styles.create_password}`}
                       />
                <span className={styles.error_message}>{errors.password?.message}</span>
                <div className={styles.password_banner}>
                    Password must <br/>
                    - be at least 8 characters long <br/>
                    - include uppercase letters, and lowercase letters <br/>
                    - include at least one number and one special character
                </div>
            </li>

            <li className={styles.input_wrapper}>
                <input {...register("confirmPassword")} type="password" placeholder="Repeat password"
                       className={errors.confirmPassword
                           ? `${styles.invalid}`
                           : ``}
                       />
                <span className={styles.error_message}>{errors.confirmPassword?.message}</span>
            </li>

            <Button text={"Sign Up"} disabled={!isValid} type="submit"/>
            <p className={styles.log_in_link} onClick={() => {
                navigate(routes.login)
            }}>
                Already have an account? <a>Log in</a>
            </p>
        </form>
    )
}

export default SignUpForm
