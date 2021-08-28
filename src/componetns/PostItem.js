import {forwardRef} from 'react';
import styles from './Common.module.css';
import Button from "./UI/Button/Button";
import './postItem.css';
import {useHistory} from "react-router";

const PostItem = ({
    id,
    title,
    body,
    remove,

}) => {
    const history = useHistory();

    const removePostHandle = () => {
        remove(id);
    }

    const openPostItem = () => {
        history.push(`/posts/${id}`);
    }

    return (
        <div className={styles.wrapper}>
            <div>
                <span>{id}.</span><span>{title}</span>
            </div>
            <div>
                {body}
            </div>
            <Button onClick={openPostItem}>open</Button>
            <Button onClick={removePostHandle}>delete</Button>
        </div>
    )
};


export default PostItem;