import { z } from 'zod'

const sanitize = (value) => {
    return value.replace(/<[^>]*>?/gm, '')
}

const schema = () =>
    z.object({
        name: z.string()
            .min(1, "Name is required")
            .transform(sanitize),
        surname: z.string()
            .min(1, "Surname is required")
            .transform(sanitize),
        username: z.string()
            .regex(/^[A-Za-z0-9_]{3,10}$/, "Username contains illegal characters")
            .min(3, "Username should be at least 3 characters long")
            .max(10, "Username should be at max 10 characters long")
            .transform(sanitize),
        password: z.string()
            .min(8, "Password should be at least 8 characters long")
            .regex(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
                "Password does not meet requirements"
            )
            .transform(sanitize),
        confirmPassword: z.string()
            .min(8, "Confirm Password")
            .transform(sanitize),
    }).refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    )

export default schema
