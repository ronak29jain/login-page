import React, { useState, useEffect } from 'react'
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home'
import AddingProfile from '../Register/AddingProfile';
import SignIn from '../SignIn/SignIn'
import Register from '../Register/Register'
import ForgotPassword from '../Forgot_Password/ForgotPassword';

import { UserAuth } from '../../context/Authcontext'

function Body() {

  const [route, setRoute] = useState('signin')
  const { user } = UserAuth();

  // const registeruser = () => {
  //   setRoute('signin')
  // }

  const changeroute = (changeroute) => {
    setRoute(changeroute)
  }

  useEffect(() => {
    (user)  
      ? ( user.emailVerified ? setRoute('home') : setRoute('addProfile') )
      : setRoute('signin')
  }, [user])

  // return (
  //   <div>
  //     {
  //         route === 'home'
  //           ? <div className="home">
  //             <Home />
  //           </div>
  //           : (
  //             route === 'signin'
  //               ? <SignIn checkuser={checkuser} changeroute={changeroute} />
  //               : <Register registeruser={registeruser} />
  //           )
  //       }
  //   </div>
  // )

  const displayPage = (page) => {
    switch (page) {
      case "home": 
        return <Home />;
      case "signin": 
        return <SignIn changeroute={changeroute} setRoute={setRoute} />;
      case "register": 
        return <Register setRoute={setRoute} />;
      case "addProfile":
        return <AddingProfile />;
      case "forgotPassword":
        return <ForgotPassword setRoute={setRoute} />
      default: 
        return <SignIn changeroute={changeroute} setRoute={setRoute} />;
    }
  }

  return (
    <div>
      <Navigation changeroute={changeroute} />
      {displayPage(route)}
    </div>
  )
}

export default Body