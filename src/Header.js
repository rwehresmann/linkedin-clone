import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import avatar from './images/avatar.jpeg';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

        <div className="header__search">
          <SearchIcon/>
          <input type="text"/>
        </div>
      </div>

      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
        <HeaderOption avatar={avatar} title="Me"/>
      </div>      
    </div>
  )
}

export default Header
