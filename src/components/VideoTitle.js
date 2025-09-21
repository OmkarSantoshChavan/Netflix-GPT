import React from 'react'

const VideoTitle = (props) => {
    const { title, overview } = props;
  return (
    <div className='pt-96 w-[500px] px-10 absolute text-white aspect-video bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p>{overview}</p>
      <div>
        <button className='m-2 px-4 py-1 bg-white rounded-md text-black hover:bg-opacity-80'>▶️ Play</button>
        <button className='m-2 px-4 py-1 bg-gray-600 rounded-md text-white'>ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
