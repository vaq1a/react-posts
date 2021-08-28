import Input from "./UI/Input/Input";
import Button from "./UI/Button/Button";
import {useState} from "react";

const PostForm = ({
    addPost,
}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addPostHandle = () => {
        addPost({
            id: Math.random(),
            title,
            description,

        });

        setTitle('');
        setDescription('');
    }

    return (
        <>
            <Input placeholder={'title'}
                   onChange={setTitle}
                   value={title} />
            <Input placeholder={'description'}
                   onChange={setDescription}
                   value={description} />
            <Button onClick={addPostHandle}>
                Add
            </Button>
        </>
    )
}

export default PostForm;