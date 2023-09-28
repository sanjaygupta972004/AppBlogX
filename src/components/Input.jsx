import {React,useId} from 'react'

const Input = React.forwardRef( function Input({
     label,
     type="text",
     className="",
     ...props
},ref){
     const id=useId()
  return (
    <div className=' width-full'>
      {label && <label className=' block mb-1' htmlFor={id}>{label}</label>}
      <input type={type}
       className={` py-2 px-3 rounded-lg bg-white text-black outline-none 
       focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className} `} 
       ref={ref}
       {...props}
       id={id}/>
    </div>
  )
}
)
export default Input
