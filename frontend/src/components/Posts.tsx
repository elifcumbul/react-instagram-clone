import { useEffect, useState } from "react";
import Postscomp from "./Postscomp";
import "./posts.css"

function Posts({ posts }: any) {
  return (
    <Postscomp>
      {posts.map(function (post: any) {
        return (
          <li key={post.photo_id}>
            <img src={post.photo_url} className="img_post"></img>
            <div>{post.caption}</div>
          </li>
        );
      })}
    </Postscomp>
  );
}

export default Posts;
