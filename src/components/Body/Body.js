import React, { useState, useEffect } from 'react'
import Home from '../Home/Home'
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'

import { UserAuth } from '../../context/Authcontext'

function Body() {

  const [route, setRoute] = useState('signin')
  const { user } = UserAuth();

  const checkuser = () => {
    setRoute('home')
  }

  const registeruser = () => {
    setRoute('signin')
  }

  const changeroute = (route) => {
    setRoute(route)
  }

  useEffect(() => {
    user?.displayName ? setRoute('home') : setRoute('signin')
  }, [user])

  return (
    <div>
      {
          route === 'home'
            ? <div className="home">
              <Home />
            </div>
            : (
              route === 'signin'
                ? <SignIn checkuser={checkuser} changeroute={changeroute} />
                : <Register registeruser={registeruser} />
            )
        }
    </div>
  )
}

export default Body