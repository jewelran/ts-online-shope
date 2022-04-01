import React from 'react'
import ProductCard from '../custom/common/ProductCard'

const ProductsArray = ({products}: {products: any[]}) => {
  return (
    <div className='grid grid-cols-4 '>
        {
            products.map((product) => <ProductCard product ={product}/>)
        }
    </div>
  )
}

export default ProductsArray