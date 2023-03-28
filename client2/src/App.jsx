import { useState } from 'react'
import './App.css'
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {

  return (
     <div className="app">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>

      <PostList />
    </div>
  )
}

export default App
