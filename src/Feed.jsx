import React, { useEffect ,useState} from 'react'
import './Feed.css'
import InputOption from './InputOption'
import CreateIcon from '@mui/icons-material/Create';
import TodayIcon from '@mui/icons-material/Today';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import Post from './Post'

import {onSnapshot, collection, addDoc ,getDocs} from "firebase/firestore";
import { db ,auth} from './firebase';


const Feed = () => {
    const [posts, setPosts]=useState([]);
   
    useEffect(() => {
        const ref = collection(db, 'posts')
        onSnapshot(ref, (snapshot) => {
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        })

    }, [])
    const sendPost = (e) => {
        e.preventDefault();
        
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