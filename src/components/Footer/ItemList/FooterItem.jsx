import React from 'react'

const FooterItem = ({icon, title, desc, how}) => {
  return (
    <div className="flex flex-col text-center px-[10px] w-full h-[250px]">
        <i class={`fa-solid fa-${icon} text-[40px] text-[#4287f5] mb-[20px]`}></i>
        <p className="text-[20px]">{title}</p>
        <p className="pt-[10px]">{desc}</p>
        <p className="text-[#4287f5] font-semibold">{how}</p>

    </div>
  )
}

export default FooterItem