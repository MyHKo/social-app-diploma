import styles from './postCreator.module.scss';
import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import Button from '@components/UiKit/Button/Button.jsx'

function PostCreator() {
    return (
        <div className={styles.postCreator}>
            <Textarea placeholder="What's on your mind?" value={""}/>
            <Button text={"Post"}/>
        </div>
    )
}

export default PostCreator
