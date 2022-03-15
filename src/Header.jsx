import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import './Header.css'
import HeaderOption from './HeaderOption'
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import WorkOffIcon from '@mui/icons-material/WorkOff';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
            <div className="header_search">
                <SearchIcon/>
                <input  placeholder="serach" type="text" className=""></input>
                </div>
            </div>
            <div className="header_right">
                <HeaderOption  Icon={HomeSharpIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountTwoToneIcon} title='My Network'/>
                <HeaderOption  Icon={WorkOffIcon} title='Job'/>
                <HeaderOption Icon={MapsUgcOutlinedIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationsIcon} title='Notification'/>
                <HeaderOption avatar='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwd2l0aCUyMGdsYXNzZXN8ZW58MHx8MHx8&w=1000&q=80' title='Me'/>
                </div>
        </div>
  )
}

export default Header