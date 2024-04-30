import React from 'react'
import ReactPlayer from 'react-player'
export default function Video() {
  return (
    <div className='bg-black pb-[15px] md:p-0'>
            <ReactPlayer url='Video/1.mp4' playing={true} width="100%" height="auto" muted={true} loop={true} />
    </div>
  )
}
