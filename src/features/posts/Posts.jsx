import { useSelector, useDispatch } from "react-redux";
import { likeButtonPressed, fetchPost } from "./postSlice";
import { useEffect } from "react";
const Posts = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {error && <p>{error}</p>}{" "}
      {posts.posts.map((post) => (
        <div key={post.postId}>
          <p>{post.caption}</p>
          <button onClick={() => dispatch(likeButtonPressed(post.postId))}>
            {post.likes} Likes
          </button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
