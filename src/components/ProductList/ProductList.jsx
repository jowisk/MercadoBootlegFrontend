import React from 'react'
import Product from './Product/Product'
const ProductList = ({title, products, handleMouseOver, handleMouseOut}) => {
    
  
  return (
    <div className="w-full p-[10px] min-w-[1200px]">
      <h2 className="text-[25px] ml-[10px] mb-[10px]">{title}</h2>
      <div className='flex w-full h-[350px]'>
        {products.map((product) => (
          <Product
              key = {product.id}
              name = {product.name}
              url = {product.url}
              price = {product.price}
              currency = {product.currency}              
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList



