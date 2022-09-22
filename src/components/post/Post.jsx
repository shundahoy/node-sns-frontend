import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import "./Post.css";
import { useEffect } from "react";
import axios from "axios";

const Post = (props) => {
  const { id, desc, photo, date, userId, likes, comment } = props.post;

  const [user, setUser] = useState({});

  console.log(likes);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/${userId}`);

      setUser(response.data);
    };
    fetchUser();
  }, []);

  const handleLike = () => {
    // setLikes(isLiked ? likes - 1 : likes + 1);
    // setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img src={user.img} alt="" className="postProfileImg" />
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img src={photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              alt=""
              className="likeIcon"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {likes.length}人がいいねしました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment}のコメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
