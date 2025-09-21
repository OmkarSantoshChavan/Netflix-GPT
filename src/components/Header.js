import React, { useEffect, useRef } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSerachView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSerachView());
  }

  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
  const language = useRef();
  const handleLangChange = () => {
      dispatch(changeLanguage(language.current.value));
  }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img 
      className='w-40 h-15' 
      src={LOGO}
      alt='logo'
      />
      <div>
        {showGptSearch && <select ref={language} className='w-24 p-2 align-middle rounded-md' onChange={handleLangChange}>
          {
            SUPPORTED_LANGUAGES.map(lang => (
              <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            ))
          }
        </select>}
      <button className='bg-purple-800 h-10 p-2 m-5 text-white rounded-lg align-middle' onClick={handleGptSearchClick}>{showGptSearch?"Home Page":"GPT Search"}</button>
      <button className='bg-red-800 h-10 p-2 text-white rounded-lg align-middle' onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  )
}

export default Header
