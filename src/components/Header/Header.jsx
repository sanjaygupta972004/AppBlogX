import { Container,Logo,LogoutBtn } from '../index'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate ,Link } from 'react-router-dom'

const Header = () => {
  const authStatus=useSelector((state)=>state.auth.status)
  const naviagate=useNavigate()
  const navItems=[
    {
      name:"Home",
      slug:"/", 
      active:true

    },
    {
      name:"Login",
      slug:"/login",
      active:!authStatus

    },
    {
      name:"Signup",
      slug:"/signup",
      active:!authStatus

    },
    {
      name:"All Posts",
      slug:"/all-posts",
      active:authStatus

    },
    {
      name:"Add Post",
      slug:"/add-post",
      active:authStatus

    },
  ]
  return (
   <header className='py-3 shadow bg-gray-500'>
    <Container>
     <nav className=' flex'>
      <div className=' mr-4'>
        <Link to ="/">
          <Logo width='70px'/>

        </Link>

      </div>
      <ul className=' flex ml-auto '>
        {navItems.map((item)=>
        item.active ? (
          <li key={item.name}>
            <button onClick={()=>naviagate(item.slug)} >{item.name}</button>
          </li>
        ): null
        )}
        {authStatus &&(
          <li><LogoutBtn/></li>
        )}
      </ul>
     </nav>
    </Container>
   </header>
  )
}

export default Header
