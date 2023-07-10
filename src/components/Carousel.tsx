"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useRef } from 'react'
import { Card } from './Card'

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
            <Card item={item} key={`card-${i}`} />
          ))
        }
      </div>
    </div>
  )
}
