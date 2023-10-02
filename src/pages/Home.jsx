import React, { useEffect, useState } from 'react'
import storedata from '../Appwrite/storage';
import { Container, PostCard } from '../components';

const Home = () => {
     const[posts,setPosts]=useState([]);

     useEffect(()=>{
          storedata.getPosts().then((posts)=>{
               if(posts){
                    setPosts(posts.documents)
               }
          })

     },[])

 if(posts.length===0){
     return(
          <div className=' w-full py-8 mt-4 text-center '>
               <Container>
                    <div className=' flex flex-wrap '>
                         <div className=' p-2 w-full'>
                              <h2 className=' text-2xl '>
                                   Login to read post
                              </h2>
                         </div>
                    </div>
               </Container>
          </div>
     )
 }else{
     <div className=' w-full py-7'>
           <div className=' flex flex-wrap'>
               {posts.map((post)=>(
                    <div key={post.$id} 
                    className=' p-2 w-1/4'>
                         <PostCard post={...posts}/>
                    </div>
               ))}
           </div>
     </div>
 }
}

export default Home
