"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useRef } from 'react'

export const Carousel = ({animes}: any) => {
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const scrollContainerRef = useRef<any>(null)

  const handleMouseDown = (e: any) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: any) => {
    if (!isDragging) return
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const scrollAmount = x - startX
    scrollContainerRef.current.scrollLeft -= scrollAmount
    setStartX(x)
  }

  return (
    <div className="flex justify-center">
      <div className={`flex gap-10 overflow-x-auto space-x-8 custom-scroll pb-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"} `}
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {
          animes.map((item: any, i: number) => (
            <div className="w-[200px] h-[300px] overflow-hidden rounded-md flex-shrink-0 pointer-events-none select-none" key={`card-${i}`}>
              <Image src={item.images.webp.image_url} alt={"image"} width={0} height={0} sizes="100vw" className="w-full h-full"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
