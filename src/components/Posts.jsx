import { useEffect, useState } from "react";
import Post from "./Post";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/5')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
        setError('');
      })
      .catch(() => {
        setLoading(false);
        setPost({});
        setError('There was a proplem');
      })
  }, []);

  return (
    <div>
      {loading ? 'Loading...' : <Post post={post} />}
      {error || null}
    </div>
  );
}

export default Posts;
