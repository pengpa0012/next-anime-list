"use client"
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export const Video = ({id, imgSrc}: any) => {
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };
  console.log(imgSrc)
  return (
    <>
      {/* <YouTube
        videoId={id}
        {...opts}
        iframeClassName='w-full h-full absolute inset-0 z-[-1]'
        onReady={(e) => e.target.playVideo()}
      /> */}
      <img className='bg-black w-full h-full absolute inset-0 z-[-1]' src={imgSrc} />
    </>
  )
}
