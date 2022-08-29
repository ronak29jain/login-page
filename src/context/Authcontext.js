import { useContext, createContext, useEffect, useState } from "react";

import { auth } from '../firebase';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState({})
  const [user0, setUser0] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const googleSignOut = () => {
    signOut(auth)
    console.log('user loged out')
  }

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    console.log('created user')
  }
  
  const addName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      console.log('error in the update profilesection. name: ', error)
      console.log('error in the update profilesection. error: ', error)
      // An error occurred
      // ...
    });
    console.log('updated name');
    setUser0(auth.currentUser)
  }

  const emailverification = () => {
    sendEmailVerification(auth.currentUser)
    console.log('verification email sended to: ', user.email)
  }

  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
      setUser(currentUser)
      console.log("User (from Authcontext): ", user)
      console.log("User Display Name (from Authcontext): ", user?.displayName)
    })
    return () => {
      unsubscribe()
      setUser0(auth.currentUser)
      console.log('auth.currentUser: ', auth.currentUser)
    }
  }, [user, user?.displayName, user0, user0?.displayName])

  return (
    <AuthContext.Provider value={{ googleSignIn, googleSignOut, user, createUser, addName, signIn, user0, emailverification }} >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}