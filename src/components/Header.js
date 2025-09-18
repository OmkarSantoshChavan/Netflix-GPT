import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utils/constants';

const Header = () => {
  //const navigate = useNavigate();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      
    });
  }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user.uid;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browse")
        } else {
          dispatch(removeUser());
          navigate("/")
        }
      });
      return () => unsubscribe();
    },[]);

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img 
      className='w-40 h-15' 
      src={LOGO}
      alt='logo'
      />
      <button className='bg-red-800 h-10 p-2 text-white rounded-lg align-middle' onClick={handleSignOut}>Sign Out</button>
    </div>
  )
}

export default Header
