import React from 'react'
import './Navigation.css'
import { UserAuth } from '../../context/Authcontext';

function Navigation({changeroute}) {
  
  const { user, googleSignOut, deleteAccount } = UserAuth();

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (Navigation.js)', err)
    }
  }

  const deleteAcc = async() => {
    try {
      const deleteEmail = prompt("To delete your Account, Please enter your email address. Please remember once deleted it cann't be recovered.")
      if (deleteEmail.toLowerCase() === user.email.toLowerCase()){
        await deleteAccount();
        console.log("account deleted")
        alert('account deleted')
      }
      else {
        console.log("your email address does not match")
        alert('your email address does not match')
      }
    } catch (err) {
      console.log('error in deleting the account from deleteAccount function (Navigation.js): ', err)
    }
  }

  return (
    <nav className='navigation'>
      { 
        user
          // <p onClick={() => changeroute('signin')} className='f3 pa3 link dim black underline pointer'>Sign Out</p> :
          ? <div className='flex justify-end'>
              <p onClick={signOut} className='nav f3 pa3 link dim black underline pointer'>Sign Out</p>
              <p onClick={deleteAcc} className='nav f3 pa3 link dim black underline pointer'>Delete Account</p>
            </div>
          : <div className="nav">
              <p onClick={() => changeroute('signin')} className='f3 pa3 link dim black underline pointer'>Sign In</p>
              <p onClick={() => changeroute('register')} className='f3 pa3 link dim black underline pointer'>Register</p>
            </div>
      }
    </nav>
  )
}

export default Navigation