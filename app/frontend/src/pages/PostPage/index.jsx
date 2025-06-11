import styles from './PostPage.module.scss'
import Post from "@components/Post/index.jsx";
import Button from "@components/UiKit/Button/Button.jsx";
import Textarea from "@components/UiKit/Textarea/Textarea.jsx";
import Comment from "@components/Comment/index.jsx";

const PostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.post_container}>
                <Post postId={1} text={"sex"} time={"2m"} user={"user"} key={11} />
            </div>

            <div className={styles.commentBox}>
            <Textarea placeholder={"Write Your comment"} value={""} />
            <Button text={"Post Comment"} />
            </div>

            <div className={styles.comment_container}>
                <Comment text={"Sexy post"} time={"2m"} user={"User"} key={2} />
                <Comment text={"Sexy post"} time={"2m"} user={"User"} key={2} />
                <Comment text={"Sexy post"} time={"2m"} user={"User"} key={2} />
            </div>
        </div>
    );
};

export default PostPage;
