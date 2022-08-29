import React, { useState } from 'react'
import { UserAuth } from '../../context/Authcontext';

function AddingProfile() {
  
  const { user, googleSignOut, addName, emailverification } = UserAuth();
  const [dname, setDName] = useState('');

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (AddingProfile.js)', err)
    }
  }
  
  const add = async() => {
    try {
      await addName(dname);
      await emailverification();
      alert("Verify Your Email and Login Again")
      signOut();
    } catch (err) {
      console.log('Error During updaing Name (AddingProfile.js)', err)
    }
  }

  return (
    <div>
      {
        user?.displayName
          ? <div>
              <h1>Please Verify your Email Address</h1>
            </div>
          : <div>        
              <input type="text" value={dname} onChange={(e) => setDName(e.target.value)} />
              <button onClick={add}> Add Name</button>
            </div>
      }
    </div>
  )
}

export default AddingProfile