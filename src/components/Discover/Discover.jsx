import React from 'react'

const Discover = ({title, desc, img}) => {
  return (
    <div className="flex w-[49%]">
        <div className="bg-white w-full rounded-[10px] p-[5px] h-[200px] flex flex-row justify-center">
            <div className="ml-[15px] w-[50%] flex flex-col items-between justify-center">
                <p className="uppercase font-semibold text-[13px] tracking-[4px]">{title}</p>
                <p className="uppercase font-semibold text-[30px]">{desc}</p>
                <button className="bg-[#4287f5] font-semibold text-white w-[100px] mt-[10px] px-[5px] py-[5px] rounded-[4px]">Ver más</button>
            </div>

            <div className="w-[50%] h-full flex">
                <img src={img} className="object-fill w-full h-full rounded-[10px]" alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Discover


