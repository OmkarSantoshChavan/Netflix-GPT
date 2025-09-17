import React, { useState } from 'react'

const Login = () => {
  const [signInForm,setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!signInForm)
  }

  return (
    <div>
        <div className='absolute'>
            <img 
            src='https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg'
            alt='body-background' 
            />
        </div>
        <form className='absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white opacity-70'>
            <h1 className='font-bold text-2xl px-2 py-5'>{signInForm ? "Sign In" : "Sign Up" }</h1>
            {!signInForm && <input type='text' placeholder='Full Name' className='p-4 m-2 w-full bg-gray-800' />}
            <input type='text' placeholder='Email Address' className='p-4 m-2 w-full bg-gray-800' />
            <input type='text' placeholder='Password' className='p-4 m-2 w-full bg-gray-800' />
            <button className='p-4 m-2 bg-red-400 w-full rounded-lg'>Sign In</button>
            <p className='text-white' onClick={toggleSignInForm}>{signInForm ? "New to netflix? Sign up" : "Already have an account, Sign In" }</p>
        </form>
    </div>
  )
}

export default Login
