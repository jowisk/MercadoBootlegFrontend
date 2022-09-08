import React from 'react'

const PaymentMethod = ({method, text, a}) => {
    //<i class="fa-solid fa-credit-card"></i>
    //<i class="fa-solid fa-address-card"></i>
    //<i class="fa-solid fa-circle-plus"></i>
  return (
    <div className="flex w-[50%] items-center justify-center h-[50%] py-[30px]">
        <i className={`fa-solid fa-${method} text-[25px] text-[#4287f5] border-[1px] p-[10px] rounded-full border-[#D3D3D3] mr-[20px]`}></i>

        <div>
            <p>{text}</p>
            <a href={`http://www.${a}`}><p className="text-[#4287f5]">Ver más</p></a>
        </div>
    </div>
  )
}

export default PaymentMethod