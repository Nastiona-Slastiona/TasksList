import React from "react";
import PostItem from "./PostItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return (
            <h1 className="list-header">There is nothing</h1>
        );
    }
    return (
        <div>
            <h1 className='list-header'>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                     <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );

};

export default PostList;