import React from 'react'
import Discover from './Discover'

const DiscoverList = ({discover}) => {
  return (
    <>
    <p className="text-[25px]">Descubre</p>
        <div className="flex w-full justify-between">
            
            {discover.map((item) => (
                <Discover
                    title = {item.title}
                    desc = {item.desc}
                    img = {item.img}
                />
            ))}
        </div>
    </>
  )
}

export default DiscoverList