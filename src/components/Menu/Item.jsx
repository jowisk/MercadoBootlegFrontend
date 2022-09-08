import React from 'react'

const Item = ({icon, text}) => {
  return (
    <div className="flex items-center h-[45px]">
        <div className="h-[25px] w-[25px] flex justify-center items-center">
            <i className={`fa-solid fa-${icon} text-[20px]`}></i>
        </div>
        <p className="text-[17px] ml-[20px]">{text}</p>
    </div>
  )
}

export default Item