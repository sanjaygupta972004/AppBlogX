import React, { useEffect, useState } from 'react'
import storedata from '../Appwrite/storage'
import { useNavigate, useParams } from 'react-router-dom'
import { Container } from 'postcss'
import { PostForm } from '../components'
const Edit = () => {
     const[post,SetPost]=useState([])
     const{slug}=useParams()
     const navigate=useNavigate()
     useEffect(()=>{
          storedata.getPost(slug).then((post)=>{
               if(post){
                    SetPost(post)
               }else{
                    navigate("/")
               }
          })
     },[slug,navigate])

  return post ? (
     <div className=" py-6" >
          <Container>
               <PostForm post={post}/>
          </Container>
     </div>
  ):null
    
  
}

export default Edit
