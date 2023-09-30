import React, { useState } from 'react'
import {Button, Input,Logo} from "./index"
import {Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {login}from "../feature/authSlice"
import authservice from '../Appwrite/auth'
import {  useForm } from 'react-hook-form'


const Signup = () => {
     const[error,setError]=useState("");
     const dispatch= useDispatch();
     const navigate=useNavigate();
     const {handleSubmit,register}=useForm();

     const create=async(data)=>{
          setError("");
      try {
           const userData= await authservice.creataAccount(data);
          if(userData){
          const userData=  await authservice.getCurrentUser()
     
          if(userData) dispatch(login(userData));
          navigate("/");
        }}catch(error){
          console.log(error.message)
        }
         
     }
  return (
    <div className=' flex items-center justify-center w-full'>
     <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl border border-black/10`}>
     <div className=' mb-2 flex justify-center'>
               <span className=' inline-block w-full max-w-[100px] '>
                    <Logo width='100%'/>
               </span>
          </div>
          <h2 className=' text-center text-2xl font-medium leading-tight '>
               Sign up to Your Account
          </h2>
          <p className='mt-2 text-center text-base text-black/40'>
               Already have a Account
               <Link to={'/login'}
                   className=' font-medium text-primary transition-all duration-100 hover:underline'>
                  Log in
                   </Link>
          </p>
          {error && <p className=' text-red-600 mt-7 text-center '> {error}</p>}

          <form  onSubmit={handleSubmit(create)}>
               <div className=' space-y-4'>
                    <Input 
                      label="Full Name:"
                      type="text" 
                      placeholder="Enter your full name..."
                      {
                       ...register("name",{
                         required:true
                       })  
                      }/>

                     <Input 
                        label="Email:"
                        placeholder="Enter Your Email..."
                        type="email"
                        {...register("email",{
                         required:true,
                         required: true,
                         validate: {
                             matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                             "Email address must be a valid address",
                         }
                        })} />

                        <Input 
                        label="Password:"
                        placeholder="Enter your password..."
                        type="password"
                        {...register("password",{
                         required:true
                        })} />

                        <Button 
                        type='submit'
                        className='w-full'>Create</Button>
               </div>
          </form>
     </div>
    </div>
  )
}

export default Signup
