import React from 'react'
import ProductCard from '../custom/common/ProductCard'

const ProductsArray = () => {
  return (
    <div className='grid grid-cols-4'>
        {
            [1, 4, 5, 6].map(item => <ProductCard/>)
        }
    </div>
  )
}

export default ProductsArray