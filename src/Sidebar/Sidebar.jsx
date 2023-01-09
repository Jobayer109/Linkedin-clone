import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h3>Jobayer Ahmed</h3>
        <p>MERN Stack web developer</p>

        <div className="side_states">
          <div className="state_view">
            <p>Who's viewed your profile</p>
            <p className="profile_viewed">2350</p>
          </div>
          <div className="state_impression">
            <p>Impression of your posts</p>
            <p className="post_impression">198</p>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom"></div>
    </div>
  );
};

export default Sidebar;
