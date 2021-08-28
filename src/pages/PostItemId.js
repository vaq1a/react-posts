import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {postsApi} from "../api/postsApi";
import Loader from "../componetns/UI/Loader/Loader";

const PostItemId = () => {
    const params = useParams();
    const [post, setPost] = useState(null);

    const [fetchingFunction, loading, error] = useFetch(async () => {
        const data = await postsApi.getItem(params.id);
        setPost(data);
    });

    useEffect(() => {
        fetchingFunction();
    }, []);

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <div>error</div>
    }

    return (
        <>
            {
                post ? (
                    <div>
                        <div>
                            id: {post.id}
                        </div>
                        <div>
                            title: {post.title}
                        </div>
                        <div>
                            body: {post.body}
                        </div>
                    </div>
                ) : (
                    <div>
                        Post is empty
                    </div>
                )
            }
        </>
    )
}

export default PostItemId;