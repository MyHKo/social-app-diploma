import Button from '@components/UiKit/Button/Button.jsx'
import Textarea from '@components/UiKit/Textarea/Textarea.jsx'
import { Heart, MessageCircle } from 'lucide-react'
import styles from './feed.module.scss'

function Feed() {
    return (
        <section className={styles.feed}>
            <div className={styles.postCreator}>
                <Textarea placeholder="What's on your mind?" value={""}/>
                <Button text={"Post"} />
            </div>

            {[1, 2, 3].map((id) => (
                <div className={styles.post} key={id}>
                    <div className={styles.postHeader}>
                        <span className={styles.username}>@user{id}</span>
                        <span className={styles.timestamp}>2h ago</span>
                    </div>
                    <p className={styles.postContent}>
                        This is a sample post content. Loving this new platform!
                    </p>
                    <div className={styles.postActions}>
                        <Heart className={styles.icon} />
                        <MessageCircle className={styles.icon} />
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Feed
