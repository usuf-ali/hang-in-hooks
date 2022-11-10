import { useState } from "react";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});
  useEffect(() => {
    fatch('https://jsnonplaceholder.typicode.com/posts/1')
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
      {loading ? 'Loading...' : post.title}
      {error || null}
    </div>
  );
}

export default Posts;
