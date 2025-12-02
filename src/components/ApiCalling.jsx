import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ApiCalling() {

    const [products,setProducts] = useState([])

    let API = 'https://dummyjson.com/products'
    useEffect(() => {
        async function call(){
            let resp = await axios.get(API)
            let Array = resp.data.products
            setProducts(Array)
        }
        call()
    } , [API])
  return products
}

export default ApiCalling
