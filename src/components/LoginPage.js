import React from 'react'
import {Link} from "react-router-dom"
export default function LoginPage() {
  return (
    <div className='p-6 flex items-center justify-around'>
      <Link className='bg-cyan-900 rounded p-2 text-white ' to="/">Home</Link>
      <Link className='bg-cyan-900 rounded p-2 text-white ' to="/clerkPage" >Clerk Log in</Link>
      <Link className='bg-cyan-900 rounded p-2 text-white ' to="/supervisorPage" >SuperVisor Log in</Link>
      <Link className='bg-cyan-900 rounded p-2 text-white ' to="/officerPage">Community Officer Log in</Link>
    </div>
  )
}
