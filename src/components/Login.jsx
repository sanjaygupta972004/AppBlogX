import React, { useState } from 'react'
import {Button, Input,Logo} from "./index"
import {Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {login as authlogin}from "../feature/authSlice"
import authservice from '../Appwrite/auth'
import {  useForm } from 'react-hook-form'

const Login = () => {
     const dispatch=useDispatch();
     const navigate=useNavigate();
     const[error,setError]=useState("");
     const {register,handleSubmit}=useForm();
     const  login= async(data)=>{
          setError("");
          try {
               const session= await authservice.login(data)
               if(session){
                    const userData=authservice.getCurrentUser()
               
                   if(userData) dispatch(authlogin(userData))
                   navigate("/")
               }
          } catch (error) {
               setError(error.messsage)
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
          <h2 className=' text-center text-2xl font-medium leading-tight'>
               Sign in to Your Account
          </h2>
          <p className='mt-2 text-center text-base text-black/40'>
               Don&apos;t hava any account?&nbsp;
               <Link to={'/signup'}
                   className=' font-medium text-primary transition-all duration-100 hover:underline'>
                    Sign Up
                   </Link>
          </p>
          {error && <p className=' text-red-600 mt-7 text-center '> {error}</p> }

          <form onSubmit={handleSubmit(login)} className=' mt-6'>
               <div className=' space-y-5'>
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
                              type="password"
                              placeholder="Enter your password"
                              {...register("password",{
                                   require:true,

                              })} />

                              <Button 
                                type='submit'
                                className='w-full'
                                children={"Sign in"}/>
               </div>

          </form>
     </div>
    </div>
  )
}

export default Login
