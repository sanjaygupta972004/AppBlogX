import React from 'react'
import  storedata from "../Appwrite/storage"
import { Link } from 'react-router-dom'
const PostCard = ({
     $id,
     title,
     featureImage
}) => {
  return (
   <Link to ={`/post/${$id}`}>
     <div className=' w-full bg-gray-100 rounded-xl p-4 '>
          <div className= ' w-full justify-center mb-4'>
               <img src ={storedata.getFilePreview(featureImage)} alt={title}
               className=' rounded-xl' />
          </div>
          <h2 className=' text-xl font-medium'>{title}</h2>
     </div>
   </Link>
  )
}

export default PostCard
