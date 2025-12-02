import React, { useState } from 'react'
import { IoMdCart } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'
import { Link } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";


function ProductItem({prd}) {
  const [hover,setHover] = useState(null)

  let dispatch = useDispatch()

  function handleCart(items){
    dispatch(addItem(items))
  }
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-32 mt-5">
  {prd.map((items, index) => {
    const isHovered = hover === index;

    return (
      <div
        key={index}
        className="
          bg-blue-950 
          rounded-lg 
          shadow-md 
          overflow-hidden 
          flex flex-col 
          h-full

          transition-all 
          duration-300 
          ease-out 
          hover:scale-105 
          hover:-translate-y-1
          hover:shadow-xl 
          hover:shadow-blue-300/40
        "
      >
        {/* Link Section */}
        <Link to={`/product/${items.id}`} className="flex flex-col h-full">
          <LazyLoadImage
            src={items.images?.[0]}
            alt={items.title}
            effect="blur"
            className="w-full h-48 object-cover transition duration-300 hover:opacity-90"
          />

          {/* Content grows to fill height */}
          <div className="p-4 flex flex-col grow">
            <h3 className="text-lg font-semibold">{items.title}</h3>
            <h4 className="text-sm text-gray-400">{items.brand}</h4>

            <p className="text-xl font-bold text-white mt-auto transition duration-300 group-hover:text-blue-300">
              ${items.price}
            </p>
          </div>
        </Link>

        {/* Cart Button ALWAYS at bottom */}
        <button
          style={{
            backgroundColor: isHovered ? "red" : "#bfdbfe",
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px solid #172554",
          }}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(null)}
          onClick={() => handleCart(items)}
          className="transition-all duration-200 hover:bg-blue-300 hover:scale-105"
        >
          <IoMdCart />
        </button>
      </div>
    );
  })}
</div>




  )
}

export default ProductItem