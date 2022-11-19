import React from 'react';
const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.id}</h1>
      <p>{post.title}</p>
    </div>
  )
}
export default Post;
