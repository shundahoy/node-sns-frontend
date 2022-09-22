import React from "react";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";
const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={PUBLIC_FOLDER + "/post/3.jpeg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="profileUserImg"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">shundai</h4>
                <span className="profileInfoDesc">
                  gfdgfdhstefrhtrefghshtrg
                </span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username="user3" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
