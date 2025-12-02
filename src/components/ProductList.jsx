// import React, { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import ApiCalling from './ApiCalling'
import ProductItem from './ProductItem'
import Search from './Search'

function ProductList() {

  let products = ApiCalling() 

  const [prd,setPrd] = useState([])

  useEffect(() => {
  if(products && products.length){
    setPrd(products)
  }
} , [products] )
  return (
    <div>
      <Search prd={prd} setPrd={setPrd}/>
      <ProductItem prd={prd}/>
    </div>
  )
}

export default ProductList