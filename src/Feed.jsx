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
    // var count=0;
    // const Colref = collection(db, 'posts')
    // const[count,setCount]=useState(0)
    const[input,setInput]=useState('');
    const [posts, setPosts]=useState([]);
    // const ref = collection(db, 'posts')
    useEffect(
        () => 
        onSnapshot(collection(db, 'posts'), (snapshot) => 
           setPosts(snapshot.docs.map((doc) =>({
                id: doc.id,
                data: doc.data()
            }))
        ))
//         setPosts(dd)
// console.log("anny"+"  "+posts)
// https://www.fotor.com/blog/wp-content/uploads/2019/10/12.blur-photo.png
// console.log(posts)
    , []);
    const sendPost = (e) => {
    //    setCount(count+1)
        e.preventDefault();
        const colRef = collection(db, 'posts');
        addDoc(colRef,{
            name:"Abhishek Singh",
            description:"A test check",
            message:input,
            photoUrl:""
        })
        setInput("")
    }
  return (
    <div className="feed">
        <div className="feed_inputContaine">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} ></input>
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
            {/* {console.log('anny',posts)
             } */}
             {/* {id,data:{name,description,message,photoUrl}} */}

             {/* {console.log('anny',posts)} */}
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                // console.log(count++)
                <Post
               
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}

            {/* <Post posts={posts} name={"Abhishek Singh"} message={"Wow it worked"} description={"Just a test"}/> */}
            {/* <Post name={"Abhishek Singh"} message={"Wow it worked"} description={"Just a test"}/> */}
        </div>
  )
}

export default Feed