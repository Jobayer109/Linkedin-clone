import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TextsmsIcon from "@mui/icons-material/Textsms";
import React from "react";
import HeaderOption from "../HeaderOption/HeaderOption";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="header_left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="search_box">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={TextsmsIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar="https://avatars.githubusercontent.com/u/108192726?v=4" title="Me" />
      </div>
    </section>
  );
};

export default Header;
