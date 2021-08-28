import Modal from "../componetns/UI/Modal/Modal";
import PostForm from "../componetns/PostForm";
import PostFilter from "../componetns/PostFilter";
import Button from "../componetns/UI/Button/Button";
import Loader from "../componetns/UI/Loader/Loader";
import PostList from "../componetns/PostList";
import Pagination from "../componetns/UI/Pagination/Pagination";
import {useEffect, useState, useRef} from "react";
import useFetch from "../hooks/useFetch";
import {postsApi} from "../api/postsApi";
import {getPageCount} from "../utils/pages";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import {useObserver} from "../hooks/useObserver";

const options = [
    {name: 'По заголовку', value: 'title'},
    {name: 'По описанию', value: 'body'}
];

const LIMIT = 10;

const Posts = () => {
    const childRef = useRef();
    const [filter, setFilter] = useState({selectedSort: '', querySearch: ''});
    const [modal, setModal] = useState(false);
    const [posts, setPosts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(1);

    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.selectedSort, filter.querySearch);


    const [fetchingFunction, loading, error] = useFetch(async () => {
        const response = await postsApi.getAll({
                             limit: LIMIT,
                             page: page,
                         });
        console.log('fetch ' + page);
        const allPosts = response.headers['x-total-count'];
        setTotalPage(getPageCount(allPosts, LIMIT));
        setPosts(data => [...data, ...response.data]);

    });

    useObserver(loading, childRef, page <= totalPage, () => setPage(page + 1));

    useEffect(() => {
        fetchingFunction();
    }, [page]);

    const addPost = (post) => {
        setPosts(items => [...items, post]);
        setModal(false);
    }

    const removePost = (id) => {
        setPosts(items => items.filter(item => item.id !== id));
    }

    const setCurrentNumPage = (num) => {
        setPage(num);
    }

    return (
        <>
            <Modal isVisible={modal}
                   setModal={setModal}>
                <PostForm addPost={addPost} />
            </Modal>
            <PostFilter filter={filter}
                        options={options}
                        setFilter={setFilter} />
            <Button onClick={() => setModal(true)}>
                Add post
            </Button>
            <PostList posts={sortedAndSearchedPosts}
                      remove={removePost} />
            {loading && <Loader />}
            {error && <div>error</div>}
            <div style={{"height": 10, "backgroundColor": "red"}}
                 ref={childRef} />
            <Pagination changePage={setCurrentNumPage} totalPage={totalPage} />
        </>
    )
}

export default Posts;