import React, { useState } from 'react'
import { UserAuth } from '../../context/Authcontext'

function ForgotPassword({ setRoute }) {

  const [email, setEmail] = useState('')
  const { getLinkForResettingPassword } = UserAuth()

  const sendLink = async() => {
    try {
      await getLinkForResettingPassword(email);
    } catch (err) {
      console.log('error in sending the "forgot password" link: ', err)
    }
    console.log('reset password link send')
    alert('Your reset password link has been send to your email address. Please check your account');
    setRoute('signin');
  }

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Forgot Password</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </fieldset>
            <div className="">
              <input onClick={sendLink} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Send Login Link"/>
            </div>
            <div className="lh-copy mt3">
              {/* <a href="#0" className="f6 link dim black db">Register</a> */}
            </div>
          </div>
        </main>
      </article>
    </div>
  )
}

export default ForgotPassword