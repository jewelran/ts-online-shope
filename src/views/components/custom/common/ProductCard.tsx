import React from 'react'

const ProductCard = ({product} : {product: any}) => {
  return (
    <div>
        <div className="">
            <img src="" alt="" />

        </div>
        <div className="">
          <div className="m-2">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-ZRCKV02JWP0AzlEqjhCc7wJNokdOUrCEg&usqp=CAU" alt="" />
          </div>
            <h4>{product}</h4>
            <p>product price</p>
        </div>
    </div>
  )
}

export default ProductCard