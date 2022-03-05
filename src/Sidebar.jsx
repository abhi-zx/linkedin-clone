import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Sidebar.css'
const Sidebar = () => {
const recentItem =(topic)=>(
    <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
        </div>
)

  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src='https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg'/>
            <Avatar className="sidebar_avatar"/>
            <h2>Abhishek SIngh</h2>
            <h4>Abhi@gmail.com</h4>
            </div>
            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>who viewed you</p>
                    <p className="sidebar_statNumber">2334</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>View on post</p>
                        <p className="sidebar_statNumber">2334</p>
                        </div>
                        </div>
                        <div className="sidebar_bottom">
                            <p>Recent</p>
                            {recentItem("react.js")}
                            {recentItem("Node.js")}
                            {recentItem("software")}
                            {recentItem("developer")}
                            {recentItem("Coding")}
                           
                </div>
        </div>
  )
}

export default Sidebar