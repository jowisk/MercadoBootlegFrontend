import React from 'react'
import ItemList from './ItemList/ItemList'
import Info from './Info'
const Footer = ({footerItems}) => {
  return (
    <div className="flex flex-col justify-around mt-[50px] bg-white pt-[80px]">

        <ItemList
          footerItems = {footerItems}
        />
        
        <Info/>
    </div>
  )
}

export default Footer