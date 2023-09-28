import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/auth'

const LogoutBtn = () => {

     const dispatch=useDispatch()
     const logoutHandler=()=>{
          authservice.logout()
          .then(()=>{
               dispatch((logout()))
          })
     }
  return (
  <button className=' inline-block px-6 py-2 duration-150 hover:bg-blue-100 rounded-full'>
     Logout
  </button>
  )
}

export default LogoutBtn
