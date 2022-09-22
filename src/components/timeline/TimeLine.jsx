import React, { useState } from "react";
import "./TimeLine.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect } from "react";
import axios from "axios";
// import { Posts } from "../../dummyData";
const TimeLine = ({ username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get("/posts/timeline/632049ef36952f3e8c7e8f32");

      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />

        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;
