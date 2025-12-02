import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ProductDetails() {
  const {id} = useParams();

  const [product , setProduct] = useState(null)

  useEffect(() => {
    async function call(){
        let resp = await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(resp.data)
    }
    call()
  },[id])

  if(!product){
    return <h2>Loading...</h2>
  }
  return (
    <div className='px-10 py-6'>
    <h3 className='text-blue-950 font-bold text-4xl mb-30'>{product.title}</h3>
    <div className='flex gap-8'>
    <div className='bg-blue-950 w-1/2 rounded-2xl p-5 mb-20'>
      <h3 className='text-blue-200 mb-2'>About: {product.description}</h3>
      <h3 className='text-blue-200 mb-2'>Categoty: {product.category}</h3>
      <h3 className='text-blue-200 mb-2'>Price: {product.price}</h3>
      <h3 className='text-blue-200 mb-2'>Discount(%): {product.discountPercentage}</h3>
      <h3 className='text-blue-200 mb-2'>Ratings: {product.rating}</h3>
      <h3 className='text-blue-200 mb-2'>Stock: {product.stock}</h3>
      <h3 className='text-blue-200 mb-2'>Brand: {product.brand}</h3>
      <h3 className='text-blue-200 mb-2'>WarrantyInformation: {product.warrantyInformation}</h3>
      <h3 className='text-blue-200 mb-2'>Shipping Details: {product.shippingInformation}</h3>
      <h3 className='text-blue-200 mb-2'>Availiability: {product.availabilityStatus}</h3>
    </div>
    <img alt="Product_Image" src={product.images} className="w-96 h-96 object-cover rounded-xl bg-blue-950 shadow-lg"/>
    </div>
    </div>
  )
}

export default ProductDetails
