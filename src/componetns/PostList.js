import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({
    remove = () => {},
    posts,

}) => {
    if(posts.length === 0) {
        return <div>Посты не найдены</div>;
    }

    return (
        <>
            <TransitionGroup>
                {
                    posts.map(post => (
                        <CSSTransition key={post.id}
                                       timeout={300}
                                       classNames="item">
                            <PostItem remove={remove}
                                      {...post} />
                        </CSSTransition>
                    ))
                }
                </TransitionGroup>
        </>
    )
}

export default PostList;