import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { likeButtonPressed } from "./postSlice";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => {
    console.log(state.posts);
    return state.posts;
  });
  return (
    <div>
      {posts.posts.map((post) => (
        <div key={post.id}>
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
