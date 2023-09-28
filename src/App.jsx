
import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './Appwrite/auth'
import {login,logout} from "./feature/authSlice"
import {Header,Footer} from "./components"

function App() {
const[loading,setLoading]=useState(true)
const dispatch=useDispatch()

useEffect(()=>{
  authservice.getCurrentUser()
  .then((userData)=>{
    if (userData) {
      dispatch((login(userData))) 
    
    } else {
      dispatch((logout()))
    }
  })
  .catch((error)=>(console.log("user is not found",error)))
  .finally(()=>setLoading(false))
},[])

  return (
   !loading ?(
   <div className=' min-h-screen flex flex-wrap content-between bg-gray-400 '>
    <div className=' w-full block'>
      <Header/>
      todo <main>{/*outlet*/}</main>
      <Footer/>
    </div>
     </div>)
   :null
  )
}

export default App
