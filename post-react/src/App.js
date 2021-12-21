import React, { Fragment, useState } from 'react';
import './App.css';
import InputPost from './components/InputPost';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPost from './components/ListPost';

function App() {
  const [posts, setPosts] = useState([]);
  return(
    <Fragment>
      <div className='container'>
      <InputPost/>
      <ListPost posts = {posts} setPosts = {setPosts}/>
      </div>
    </Fragment>
);
}

export default App;
