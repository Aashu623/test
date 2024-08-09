import React, { useState } from "react";
import { useAddPostMutation } from "../api/postApi";

function Post() {
  const [post, setPost] = useState("");
  const [addPost] = useAddPostMutation();
  return (
    <>
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button onClick={() => addPost(post)}>Add</button>
    </>
  );
}

export default Post;
