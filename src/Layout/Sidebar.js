import React from 'react';
import { Link } from 'react-router-dom';
import css from './Sidebar.module.css';
import { SlBubbles } from "react-icons/sl";
import { CgHome } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import avatar from '../Images/avatar.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className={css.layout}>
        <div className={css.initialName}>S.</div>
        <div className={css.bubbleChat}><SlBubbles /></div>
        <div className={css.containerIconLink}>
          <div className={css.iconLinkChoosed}><CgHome /></div>
          <div className={css.iconLink}><IoIosNotificationsOutline /></div>
          <div className={css.iconLink}><HiOutlineClock /></div>
          <div className={css.iconLink}><IoPeopleOutline /></div>
          <div className={css.iconLink}><CiWallet /></div>
          <div className={css.iconLink}><IoSettingsOutline /></div>
        </div>
        <div className={css.avatar}>
          <img src={avatar} style={{ height: "3vw", width: "3vw" }}/>
        </div>
        <div className={css.log}><MdLogout /></div>
      </div>
    </div>
  );
};

export default Sidebar;
