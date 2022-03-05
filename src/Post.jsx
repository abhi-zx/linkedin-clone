import React from 'react'
import Avatar from '@mui/material/Avatar';
import './Post.css'
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
const Post = ({name, description,message,postUrl}) => {
  return (
    <div className='post'>
      <div className='post_header'>
        <Avatar/>
        <div className='post_info'>
          <h2>{name}</h2>
          <p>{description}</p>
          </div>
        </div>
        <div className='post_body'>
          <p>{message}</p>
          </div>
          <div className="post_buttons">
            <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="gray"/>
            <InputOption Icon={MapsUgcOutlinedIcon} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray"/>
            <InputOption Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
      </div>
  )
}

export default Post