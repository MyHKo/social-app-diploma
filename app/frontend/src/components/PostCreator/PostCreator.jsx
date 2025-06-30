import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import Button from '@components/UiKit/Button/Button.jsx'
import { useRef } from 'react'
import {useAuthStore} from '@stores/AuthStore.js'
import styles from './postCreator.module.scss';

function PostCreator() {
    const { username } = useAuthStore()
    const ref = useRef(null)
    const titleRef = useRef(null)

    const submitHandler = () => {
        const title = titleRef.current.value.replace(/<[^>]*>?/gm, '')
        const text = ref.current.value.replace(/<[^>]*>?/gm, '')
        fetch("http://localhost:8080/posts/create", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                title: title,
                text: text
            }),
        }).then(() => {
            window.location.reload()
        }).catch((e) => {
            console.log("Error while creating a post: ", e)
        })
    }

    return (
        <div className={styles.postCreator}>
            <input className={styles.title_input} placeholder="Title" ref={titleRef} />
            <Textarea placeholder="What's on your mind?" ref={ref}/>
            <Button text={"Post"} onClick={submitHandler} />
        </div>
    )
}

export default PostCreator
