import React from 'react'
import Item from './Item'
const MenuList = ({list}) => {
  return (
    <div className="p-[15px]">
      {list.map((item) => (
        <Item
          icon = {item.icon}
          text = {item.text}
        />
      ))}
    </div>
  )
}

export default MenuList