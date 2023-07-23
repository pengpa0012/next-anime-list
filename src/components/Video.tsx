"use client"
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export const Video = ({id, imgSrc, video}: any) => {
  const opts: YouTubeProps['opts'] = {
    playerVars: {
      // controls: 0,
      // autoplay: 1,
      // loop: 1,
      // playlist: id
    },
  };

  return (
    <>
      {
        video ?
        <YouTube
          videoId={id}
          {...opts}
          iframeClassName='w-full h-full absolute inset-0 z-[-1]'
          onReady={(e) => e.target.playVideo()}
        /> 
        : <img className='bg-black w-full h-full absolute object-cover inset-0 z-[-1]' src={imgSrc} />
      }
    </>
  )
}
