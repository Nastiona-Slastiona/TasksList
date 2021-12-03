import React, { useState, useMemo } from 'react';
import  './styles/App.css';
import PostList from './components/PostList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';


function App() {
  const [posts, setPosts] = useState([
    {id:1, title: 'JavaScript1', body: 'JavaScript - programming language'},
    {id:2, title: 'JavaScript2', body: 'JavaScript - programming language'},
    {id:3, title: 'JavaScript3', body: 'JavaScript - programming language'},
  ])
  const [filter, setFilter] = useState({selectedSort:'', searchQuery: ''});

  const sortedPosts = useMemo(() => {
      console.log('GET SORTED POSTS');
      if(filter.selectedSort) {
        return [...posts].sort((a, b) => a[filter.selectedSort].localeCompare(b[filter.selectedSort]));
      }
      return posts;
  },  [filter.selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.searchQuery.toLowerCase()));
  }, [filter.searchQuery, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <TaskForm create={createPost}/>
      <hr className="separator"/>
      <TaskFilter 
        filter={filter}
        setFilter={setFilter}  
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List of posts 1'}/>
      
    </div>
  );
}

export default App;
