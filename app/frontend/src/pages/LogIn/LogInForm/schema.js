import { z } from 'zod'

const sanitize = (value) => {
    return value.replace(/<[^>]*>?/gm, '')
}

const schema = () =>
    z.object({
        username: z.string()
            .transform(sanitize),
        password: z.string()
            .transform(sanitize),
    })

export default schema
