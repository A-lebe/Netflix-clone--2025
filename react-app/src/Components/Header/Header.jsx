import React from 'react'
import logo from "../../assets/image/Logo.jpg";
// import those icons from mui after we install material icons from package json
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./Header.css";
function Header() {
  return (
    <div className='outer-container'>
      <div className='header-container'>
        <div className='header-left'>
          <ul>
            <li><img src={logo} alt="netflixlogo" width={100}/></li>
            <li>Home</li>
            <li>Tvshow</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>Mylist</li>
            <li>Browse by languages</li>
          </ul>

        </div>
         <div className='header-right'>
            <ul>
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><AccountBoxIcon /> </li>
            <li><ArrowDropDownIcon /></li> 
            </ul>
        </div>
         
      </div>
    </div>
  )
}
export default Header