import React, { useEffect } from 'react'
import { useState } from 'react';

const ImageSlider = ({slides}) => {

    const [imageIndex, setImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false)

    const goToPrevious = () => {
        const isFirstSlide = imageIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : imageIndex - 1;
        setImageIndex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = imageIndex === slides.length - 1 ;
        const newIndex = isLastSlide ? 0 : imageIndex + 1;
        setImageIndex(newIndex)
    }

    const toggleMouseOver = () => {
        setIsHovering((previousState) => {
          return !previousState
        })
      }

    return (
    <div className="h-full w-[100%] m-auto relative">
        
        <div className={`flex text-white items-center justify-between bg-[url('${slides[imageIndex].url}')] w-full h-full bg-center bg-cover`} onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOver}>
        {isHovering && (<i className="fa-solid fa-caret-left text-[60px]" onClick={goToPrevious}></i>)}
        {isHovering && (<i className="fa-solid fa-caret-right text-[60px]" onClick={goToNext}></i>)}
        </div>
    </div>
  )
}

export default ImageSlider