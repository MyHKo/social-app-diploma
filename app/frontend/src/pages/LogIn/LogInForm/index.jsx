import Button from '@components/UiKit/Button/Button.jsx'
import {useNavigate} from 'react-router'
import routes from '@routes/path.js'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import schema from './schema.js'
import {useAuthStore} from '@stores/AuthStore.js'
import styles from './loginform.module.scss'

function LoginForm() {
    const navigate = useNavigate()
    const { setIsLoggedIn, setPublicKey, setUsername, setAccessToken } = useAuthStore()

    const onsubmit = (data) => {
        fetch("http://localhost:8080/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text();
                }
            })
            .then((result) => {
                if (typeof result === "string") {
                    if (result.includes("Username not found")) {
                        setError("username", {
                            type: "manual",
                            message: "Username not found"
                        });
                    } else if (result.includes("Incorrect password")) {
                        setError("password", {
                            type: "manual",
                            message: "Incorrect password"
                        });
                    }
                } else {
                    setIsLoggedIn(true)
                    setPublicKey(result.publicKey)
                    setUsername(result.username)
                    setAccessToken(result.accessToken)
                    navigate("/")
                }
            })
            .catch((err) => {
                console.error("Unexpected error:", err);
            });
    };

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors}
    } = useForm({
        resolver: zodResolver(schema()),
        mode: 'onChange',
        defaultValues: {
            username: '',
            password: '',
        }
    })

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
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
                           ? `${styles.invalid}`
                           : ``}/>
                <span className={styles.error_message}>{errors.password?.message}</span>
            </li>
            <Button text={"Log In"} type="submit"/>
            <p className={styles.registerLink} onClick={() => {
                navigate(routes.signup)
            }}>
                Don't have an account? <a>Sign up</a>
            </p>
        </form>
    )
}

export default LoginForm
