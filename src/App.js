import React, { useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'
import Feed from './Feed'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'
import  Login  from './Login'
import { getAuth ,onAuthStateChanged} from "firebase/auth";
const App = () => {
 const user= useSelector(selectUser)
// const auth = getAuth()
 const dispatch= useDispatch();
 useEffect(()=>{
  const auth = getAuth()
onAuthStateChanged(auth,(userAuth)=>{
  if(userAuth){
    dispatch(login({
                    email:userAuth.email,
                    uid:userAuth.uid,
                    displayName:userAuth.name,
                   
    }))
  }else{
    dispatch(logout())
  }
})
 },[])

  return (
    <div className='app'> 
      <Header/>
     
      {!user?(<Login/>):(<div className="app_body">
      <Sidebar />
      <Feed/>
        </div>)
      }
     
    {/* App body */}
    {/* sidebar */}
    
    {/* Feed   */}
    {/* widget */}
    </div>
  )
}

export default App