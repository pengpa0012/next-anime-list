"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useRef } from 'react'
import { Card } from './Card'

export const Carousel = ({animes}: any) => {
  const scrollContainerRef = useRef<any>(null)

  const onNextPage = () => {
    scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth / 2
  }

  const onPrevPage = () => {
    scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth / 2
  }

  return (
    <div className="flex justify-center">
      <button onClick={onPrevPage}>prev</button>
      <div className={`flex gap-10 overflow-x-auto space-x-8 custom-scroll pb-4 transition-250 scroll-smooth`}
        ref={scrollContainerRef}
      >
        {
          animes.map((item: any, i: number) => (
            <Card item={item} key={`card-${i}`} className="pointer-events-none" />
          ))
        }
      </div>
      <button onClick={onNextPage}>next</button>
    </div>
  )
}
