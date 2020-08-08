import React from 'react';
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
  return (
    <div className="header">
      <div className="header__left">
      <MenuIcon/>
      <img  className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt="image"/>
      </div>
      <div className="header__input">
      <input type="text" placeholder="Search"/>
      <SearchIcon className="header__button"/>
      </div>
      <div className="header_right">
      <VideoCallSharpIcon className="header__icon"/>
      <AppsSharpIcon className="header__icon"/>
      <NotificationsSharpIcon className="header__icon"/>
      <AccountCircleIcon className="header__icon"/>
      </div>


    </div>
  )
}

export default Header;
