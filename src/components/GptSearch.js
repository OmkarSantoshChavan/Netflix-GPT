import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BODY_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img 
            src={BODY_BG}
            alt='body-background' 
            />
        </div>
         <GptSearchBar/>
    </div>
  )
}

export default GptSearch
