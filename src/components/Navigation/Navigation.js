import React from 'react'
import './Navigation.css'
import { UserAuth } from '../../context/Authcontext';

function Navigation({changeroute}) {
  
  const { user, googleSignOut } = UserAuth();

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (Navigation.js)', err)
    }
  }

  return (
    <nav className='navigation'>
      { 
        user ?
          // <p onClick={() => changeroute('signin')} className='f3 pa3 link dim black underline pointer'>Sign Out</p> :
          <p onClick={signOut} className='nav f3 pa3 link dim black underline pointer'>Sign Out</p> :
          <div className="nav">
            <p onClick={() => changeroute('signin')} className='f3 pa3 link dim black underline pointer'>Sign In</p>
            <p onClick={() => changeroute('register')} className='f3 pa3 link dim black underline pointer'>Register</p>
          </div>
      }
    </nav>
  )
}

export default Navigation