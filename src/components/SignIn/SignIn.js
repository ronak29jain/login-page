import React, { useState } from 'react'
import { UserAuth } from '../../context/Authcontext'
import GoogleButton from 'react-google-button'

function SignIn({ changeroute, setRoute }) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { googleSignIn, signIn } = UserAuth()

  const signInWithGoogle = async() => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log('error in signInWithGoogle function from "Signin.js" file', err)
    }
  }

  const logIn = async(email, password) => {
    try{
      await signIn(email, password);
    } catch (err) {
      console.log('error in logIn function from "Signin.js" file', err)
    }
  }

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </fieldset>
            <div className="mv3">
              <input onClick={() => logIn(email, password)} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
            </div>
            <div className="signinwithgoogle mv3">
              {/* <input onClick={signInWithGoogle} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in with Google"/> */}
              <GoogleButton onClick={signInWithGoogle} className='pointer' />
            </div>
            <div className="lh-copy mt3 mv4">
              <a onClick={() => changeroute('register')} href="#0" className="f6 link dim black db">Register</a>
            </div>
          </div>
        </main>
      </article>
    </div>
  )
}

export default SignIn