import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './App.css'
import Feed from './Feed'
import { useSelector } from 'react-redux'
// import { selectUser } from './features/userSlice'
import  Login  from './Login'
const App = () => {
 const u1= useSelector((state)=>state.user.user)
 console.log(u1)
  // useSelector(selectUser)
  // const user=useSelector(selectUser)
  const user =false;
  // console.log(user)
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