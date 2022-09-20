import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import { Online } from "../online/Online";
const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/star.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpeg" alt="" />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user.id} />
          ))}
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion1.jpeg"
          alt=""
        />
        <p className="promotionName">ショッピング</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion2.jpeg"
          alt=""
        />
        <p className="promotionName">カーショップ</p>
        <img
          className="rightbarPromotionImg"
          src="assets/promotion/promotion3.jpeg"
          alt=""
        />
        <p className="promotionName">ShinCode株式会社</p>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">user info</h4>
        <div className="rightbarinfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身:</span>
            <span className="rightbarInfoKey">福岡</span>
          </div>
          <h4 className="rightbarTitlte">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">shinxcode</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">shinxcode</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">shinxcode</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};

export default Rightbar;
