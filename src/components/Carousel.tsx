"use client"
import Image from 'next/image'
import React from 'react'
import { useState, useRef } from 'react'
import { Card } from './Card'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const Carousel = ({animes}: any) => {
  const scrollContainerRef = useRef<any>(null)
  const [disable, setDisable] = useState(false)

  const onChangePage = (direction: string) => {
    setDisable(true)
    if(direction == "right") scrollContainerRef.current.scrollLeft += scrollContainerRef.current.clientWidth / 2
    else scrollContainerRef.current.scrollLeft -= scrollContainerRef.current.clientWidth / 2
    setTimeout(() => {
      setDisable(false)
    }, 500)
  }

  return (
    <div className="flex justify-center">
      <button onClick={() => onChangePage("left")} className={`arrow pr-4 ${disable ? 'pointer-events-none' : 'pointer-events-all'}`}>
        <IoIosArrowBack size={35} />
      </button>
      <div className={`flex gap-10 overflow-x-auto space-x-8 custom-scroll pb-4 transition-250 scroll-smooth`}
        ref={scrollContainerRef}
      >
        {
          animes.map((item: any, i: number) => (
            <Card item={item} key={`card-${i}`} className="pointer-events-none" />
          ))
        }
      </div>
      <button onClick={() => onChangePage("right")} className={`arrow pl-4 ${disable ? 'pointer-events-none' : 'pointer-events-all'}`}>
        <IoIosArrowForward size={35} />
      </button>
    </div>
  )
}
