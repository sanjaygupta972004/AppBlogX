import React from 'react'

const Button = ({
     children,
     type="button",
     bgColor=" bg-blue-600",
     className="",
     ...props
}) => {
  return (
   <button className={` px-4 py-2 rounded-lg ${bgColor} ${type} ${className}`} {...props}>
     {children}
   </button>
  )
}

export default Button
