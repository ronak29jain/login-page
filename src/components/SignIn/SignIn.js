import React from 'react'
// import React, { useEffect } from 'react'
import { UserAuth } from '../../context/Authcontext'
// import { useNavigate } from 'react-router-dom'

function SignIn({checkuser, changeroute}) {
  
  const { googleSignIn } = UserAuth()
  // const { googleSignIn, user } = UserAuth()
  // const navigate = useNavigate()

  const signInWithGoogle = async() => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log('error in signInWithGoogle function from "Signin.js" file', err)
    }
  }

  // useEffect(() => {
  //   if (user != null) {
  //     navigate('../Home/Home')
  //   }
  // }, [])

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={checkuser} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="signinwithgoogle">
              <input onClick={signInWithGoogle} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in with Google"/>
            </div>
            <div className="lh-copy mt3">
              <a onClick={() => changeroute('register')} href="#0" className="f6 link dim black db">Register</a>
            </div>
          </div>
        </main>
      </article>
    </div>
  )
}

export default SignIn