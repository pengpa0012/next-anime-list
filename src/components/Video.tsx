"use client"
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export const Video = ({id}: any) => {
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: 0
    },
  };
  
  return (
    <>
      {/* <YouTube
        videoId={id}
        {...opts}
        iframeClassName='w-full h-full absolute inset-0 z-[-1]'
        onReady={(e) => e.target.playVideo()}
      /> */}
      <div className='bg-black w-full h-full absolute inset-0 z-[-1]'></div>
    </>
  )
}
