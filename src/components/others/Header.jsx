import React, { useState } from 'react'

const Header = (props) => {

  
  // const [username, setUsername] = useState(' ')
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstname)
  // }
const logOutuser = () => {
localStorage.setItem('loggedInUser', ' ')
window.location.reload()

}

  return (
    <div className='flex items-end justify-between text-white'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username 👋</span></h1>
        <button onClick={logOutuser} className='bg-red-600 text-white px-5 py-2 rounded-md active:bg-red-400 text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header