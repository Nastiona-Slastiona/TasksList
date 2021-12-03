import React, { useState } from 'react';
import StyledButton from './UI/button/StyledButton';
import StyledInput from './UI/input/StyledInput';

const TaskForm = ({create}) => {

      const [post, setPost] = useState({title: '', body: ''})
      const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post, id: Date.now()

        }
        create(newPost);
        setPost({title: '', body: ''})
      }
    return (
        <form>
            <StyledInput
                value={post.title} 
                onChange={event => setPost( {...post, title: event.target.value} )}
                type='text' 
                placeholder='Post Name'
            />
            <StyledInput 
                value={post.body} 
                onChange={event => setPost( {...post, body: event.target.value} )}
                type='text' 
                placeholder='Post Description'
            />
            <StyledButton onClick={addNewPost}>Add Post</StyledButton>
        </form>
    
    );

};

export default TaskForm;