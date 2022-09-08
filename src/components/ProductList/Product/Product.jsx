import React from 'react'
import { useState } from 'react'
const Product = ({name, url, price, currency}) => {

  const [isHovering, setIsHovering] = useState(false)

  const toggleMouseOver = () => {
    setIsHovering((previousState) => {
      return !previousState
    })
  }


  return (
    <div className="mx-[10px] min-h-[322px] w-[230px] h-[330px] " onMouseOver={toggleMouseOver} onMouseOut={toggleMouseOver}>
        <div className="w-full flex justify-center">
            <img className="w-[229px] h-[229px]"src={url} alt="" srcset="" />
        </div>

        <div className="flex flex-col bg-white p-[10px] border-[#D3D3D3] border-[1px] shadow">
          <p className="text-[23px]">{currency} {price}</p>
          <p>{"10x $ " +(price/10) + " sin interés"}</p>
          {isHovering && (<p>{name}</p>)}

        </div>
    </div>
  )
}

export default Product