import React, { useState } from 'react'
import { UserAuth } from '../../context/Authcontext'

function Home() {

  const { user,  googleSignOut, addName, emailverification } = UserAuth();
  const [dname, setDName] = useState('');

  const signOut = async() => {
    try {
      await googleSignOut();
    } catch (err) {
      console.log('Error During Log Out (Home.js)', err)
    }
  }
  
  const add = async() => {
    try {
      await addName(dname);
      await emailverification();
      alert("Verify Your Email and Login Again")
      signOut();
    } catch (err) {
      console.log('Error During updaing Name (Home.js)', err)
    }
  }
  
  return (
      <div>
        {
          user?.displayName
            ? <div>
                <h1>Home</h1>
                <h3>Name: {user?.displayName} </h3>
                <h3>Email: {user?.email} </h3>
                <h3>PhotoUrl: {user?.photoURL} <img src="{user?.photoURL}" alt="profile" /> </h3>
                <h3>Phone Number : {user?.phoneNumber} </h3>
                <h3>Verified Email : {user?.emailVerified ? 'true' : 'false'} </h3>
                <h3>UID : {user?.uid} </h3>

                <button onClick={signOut} className='pointer ph2 pv2 shadow-5 mv4' >Log Out</button>
              </div>
            : <div>        
                <input type="text" value={dname} onChange={(e) => setDName(e.target.value)} />
                <button onClick={add}> Add Name</button>
              </div>
        }
      </div>
    )
  // return (
  //     <div>
  //       <div>
  //         <h1>Home</h1>
  //         <h3>Name: {user?.displayName} </h3>
  //         <h3>Email: {user?.email} </h3>
  //         <h3>PhotoUrl: {user?.photoURL} <img src="{user?.photoURL}" alt="profile" /> </h3>
  //         <h3>Phone Number : {user?.phoneNumber} </h3>
  //         <h3>Verified Email : {user?.emailVerified ? 'true' : 'false'} </h3>
  //         <h3>UID : {user?.uid} </h3>

  //         <button onClick={signOut} className='pointer ph2 pv2 shadow-5 mv4' >Log Out</button>
  //       </div>
  //     </div>
  //   )
}

export default Home