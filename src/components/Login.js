import React, { useRef, useState } from 'react'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { BODY_BG } from '../utils/constants';


const Login = () => {
  const [signInForm,setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm)
  }

  const handleFormData = () => {
    const msg = checkValidData(email.current.value , password.current.value);
    console.log(msg);
    setErrorMsg(msg);
    if(msg) return;

    //sign up, sign in logic
    if(!signInForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+ " - " + errorMessage);
        
        // ..
      });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+ " - " + errorMessage);
        setErrorMsg(errorMessage)
      });
    }
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img 
            src={BODY_BG}
            alt='body-background' 
            />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white opacity-70'>
            <h1 className='font-bold text-2xl px-2 py-5'>{signInForm ? "Sign In" : "Sign Up" }</h1>
            {!signInForm && <input type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-800' />}
            <input ref={email} type='text' placeholder='Email Address' className='p-4 m-2 w-full bg-gray-800' />
            <input ref={password} type='text' placeholder='Password' className='p-4 m-2 w-full bg-gray-800' />
            <p className='text-red-500'>{errorMsg}</p>
            <button className='p-4 m-2 bg-red-400 w-full rounded-lg' onClick={ handleFormData }>Sign In</button>
            <p className='text-white' onClick={toggleSignInForm}>{signInForm ? "New to netflix? Sign up" : "Already have an account, Sign In" }</p>
        </form>
    </div>
  )
}

export default Login
