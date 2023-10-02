import { Container,PostCard } from 'postcss'
import React, { useEffect, useState } from 'react' 
import storedata from '../Appwrite/storage'

const AllPosts = () => {
     const [posts,setPosts]=useState([])
     useEffect(()=>{
     storedata.getPosts([]).then((posts)=>{
          if(posts){
               setPosts(posts.documents)
          }
          })
        
     },[])
  
  return (
    <div className=' py-6 w-full'>
     <Container>
      <div className=' flex flex-wrap'>
          {posts.map((post)=>(
          <div key={post.$id} 
           className=' p-3 w-1/4'>
               <PostCard post={post}/>
           </div>
          ))}
      </div>
     </Container>
      
    </div>
  )
}

export default AllPosts
