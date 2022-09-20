import { MoreVert } from "@mui/icons-material";
import React, { useState } from "react";
import { Users } from "../../dummyData";
import "./Post.css";
const Post = (props) => {
  const { id, desc, photo, date, userId, like, comment } = props.post;

  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img
              src={Users.filter((user) => user.id === id)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === id)[0].username}
            </span>
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
            <span className="postLikeCounter">{likes}人がいいねしました</span>
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
