import React from 'react'
import FooterItem from './FooterItem'

const ItemList = ({footerItems}) => {
  return (
    <div className="border-[#D3D3D3] border-b-[1px] flex flex-row">
        {footerItems.map((item) => (
        <FooterItem
        icon = {item.icon}
        title = {item.title}
        desc = {item.desc}
        how = {item.how}
        />
        ))}
    </div>
  )
}

export default ItemList

