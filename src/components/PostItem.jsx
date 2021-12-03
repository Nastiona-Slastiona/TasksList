import React from "react";
import StyledButton from "./UI/button/StyledButton";

const PostItem = (props) => {
    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post_button-list">
          <StyledButton onClick={() =>props.remove(props.post) }>Delete</StyledButton>
        </div>


        </div>
    );
};

export default PostItem;