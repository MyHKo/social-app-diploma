import { z } from 'zod'

const schema = () =>
    z.object({
        name: z.string().min(1, "Name is required"),
        surname: z.string().min(1, "Surname is required"),
        username: z.string().min(3, "Username should be at least 3 characters long"),
        password: z
            .string()
            .min(8, "Password should be at least 8 characters long")
            .regex(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/,
                "Password does not meet requirements"
            ),
        confirmPassword: z.string().min(8, "Confirm Password"),
    }).refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    );

export default schema
