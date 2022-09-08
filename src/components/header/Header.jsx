import React from 'react'
import SearchBar from '../SearchBar'


const Header = ({handleMenuState, menuState}) => {
  return (
    <div className="flex w-full h-[50px] py-[10px] px-[10px] bg-[#fff159] justify-start border-b-[1px] border-black">
        <p className="flex items-center ml-w-[30px] h-[30px] bg-white font-bold text-yellow-500">MT</p>
        <div className="flex items-center h-full w-[90%] bg-white">
            <i className="fa fa-search mx-[10px]" aria-hidden="true"></i>
            <SearchBar/>
        </div>

        <div className="w-[30%] ml-[10px] flex justify-around items-center">
            {menuState ? <i className="fa-solid fa-x" onClick={handleMenuState}></i> : <i className="fa-solid fa-bars" onClick={handleMenuState}></i>}
            <i className="fas fa-shopping-cart"></i>
        </div>
    </div>
  )
}

export default Header