import React from 'react'

const MenuHeader = ({name, email, pfp}) => {
  return (
    <div className="p-[15px] flex w-full h-[100px] bg-[#fff159]">
      <div>
        <img className="w-[40px] h-[40px] mr-[10px]" src={pfp} alt="" />
      </div>

      <div>
        <p className="font-semibold">Hola {name}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default MenuHeader