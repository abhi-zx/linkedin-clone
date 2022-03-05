import React, { useEffect } from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create';
import TodayIcon from '@mui/icons-material/Today';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import { useState } from 'react';
import Post from './Post'

// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { db ,auth} from './firebase';
// import { doc, onSnapshot } from "firebase/firestore";
import {onSnapshot, collection, addDoc } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
// import {data1} from './firebase.js'
const Feed = () => {
    const [posts, setPosts]=useState([]);
   
    useEffect(()=>{
//  console.log(ans)

    },[])
    const sendPost = (e) => {
        e.preventDefault();
        // console.log('anny')
        // console.log(data1)
    }
  return (
    <div className="feed">
        <div className="feed_inputContaine">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text"></input>
                    <button type="submit" onClick={sendPost}className="">Send</button>
                </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={AddAPhotoOutlinedIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={OndemandVideoOutlinedIcon} title="Video" color="#7FC15E"/>
                    <InputOption Icon={TodayIcon} title="Event" color="#E7A33E"/>
                    <InputOption Icon={FeedOutlinedIcon} title="Write article" color="#FC9295"/>
                </div>
            </div>
            {posts.map((post)=>{
                <Post/>
            })}

            <Post name={"Abhishek Singh"} message={"Wow it worked"} description={"Just a test"}/>
        </div>
  )
}

export default Feed