import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
// import { auth } from './firebase'
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css'
const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [name,setName]=useState("")
    const [profilePic,setProfilePic]=useState("")
    const dispatch=useDispatch();
    const loginToApp =(e)=>{
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(userAuth=>{
            dispatch(login({
                email:userAuth.user.email,
                uid:userAuth.user.uid,
                displayName: userAuth.user.name,
                profileUrl:userAuth.user.photoURL
              
            }))
        }).catch(error=>(alert(error)));
    }
    const register= () => {
        if(!name)
        alert("Please enter full name")
        // auth.createUserWithEmailAndPassword(email,password)
        const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        
            .then((userAuth)=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.name,
                    photoURL:userAuth.user.profilePic
                }))
            })
        .catch(error=>(alert(error)));
    }
  return (
 <div className="login">
     <img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"/>
     <form>
         <input type="text"placeholder='Full Name'value={name} onChange={(e)=>setName(e.target.value)}/>
         <input type="text"placeholder='Profile Pic URL(Optional)'value={profilePic}onChange={(e)=>setProfilePic(e.target.value)}/>
         <input type="Email"placeholder='Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <input type="Password"placeholder='Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
         <button type="submit" onClick={loginToApp}>SignIn</button>
     </form>
<p>Not a member ?
    <span className='login_r' onClick={register}>Register Now</span>
</p>
 </div>
  )
}

export default Login