import React from 'react'

const Nav = (props) => {
  return (
    <div className="flex w-full h-[30px] py-[18px] px-[10px] bg-[#fff159] justify-between items-center">
        <div className="flex items-center justify-start">
            <i className="fa-solid fa-location-dot mr-[10px]"></i>
            <p className="text-[12px]">Enviar a {props.name}, {props.address}</p>
        </div>

        <div >
            <i class="fa-solid fa-angle-right"></i>
        </div>
    </div>
  )
}

export default Nav