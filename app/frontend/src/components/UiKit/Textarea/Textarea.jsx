import { forwardRef } from 'react'
import styles from './textarea.module.scss'

 const Textarea = forwardRef((props, ref) => {
    return <textarea className={styles.textarea} ref={ref} {...props} />;
})

Textarea.displayName = 'Textarea'

export default Textarea
