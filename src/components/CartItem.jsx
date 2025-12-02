import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, clearCart, increaseQty, decreaseQty } from '../utils/cartSlice'
import { Link } from 'react-router'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CartItem() {
  const [hoverRemove, setHoverRemove] = useState(null)
  const [hoverClear, setHoverClear] = useState(false)
  const [hovered,setHovered] = useState(false)

  const cartItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const totalAmount = cartItems.reduce((acc, item) => {
  return acc + item.price * item.qty;
}, 0);

  return (
    <>
      {/* CLEAR CART BUTTON */}
      <button
        onClick={() => dispatch(clearCart())}
        style={{
          backgroundColor: hoverClear ? "red" : "#172554",
          maxWidth: "768px",
          width: "auto",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          margin: "12px"
        }}
        onMouseEnter={() => setHoverClear(true)}
        onMouseLeave={() => setHoverClear(false)}
      >
        Clear Cart
      </button>
      <div className="p-4 max-w-3xl mx-auto">
        {cartItems.length === 0 && (
          <h1 className="text-center text-xl font-semibold text-gray-600">
            Your Cart is Empty 😢
          </h1>
        )}

        {cartItems.map((item, index) => {
          const removeHovered = hoverRemove === index

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between mb-4"
            >

              <LazyLoadImage
                src={item.images?.[0]}
                alt={item.title}
                effect="blur"
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* TITLE + PRICE */}
              <div className="flex-1 px-4">
                <h1 className="text-lg font-bold text-gray-900">{item.title}</h1>
                <p className="text-gray-500 text-sm mt-1">{item.category}</p>

                <h2 className="text-amber-600 font-semibold mt-2">
                  ₹ {item.price}
                </h2>
              </div>

              {/* RIGHT SIDE BUTTONS */}
              <div className="flex flex-col items-end">
                
                {/* REMOVE BUTTON */}
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-4 py-2 text-white rounded-lg mb-2"
                  style={{
                    backgroundColor: removeHovered ? "red" : "#172554",
                    transition: "0.2s"
                  }}
                  onMouseEnter={() => setHoverRemove(index)}
                  onMouseLeave={() => setHoverRemove(null)}
                >
                  Remove
                </button>

                {/* QUANTITY BUTTONS */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded-md"
                  >
                    -
                  </button>

                  <span className="font-semibold text-gray-900">
                    Quantity: {item.qty}
                  </span>

                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="max-w-3xl mx-auto mt-6 bg-white shadow-md p-5 rounded-lg">

  <div className="flex justify-between text-xl font-semibold">
    <span className='text-black'>Total Amount:</span>
    <span className='text-black'>₹ {totalAmount}</span>
  </div>

<Link to="/Checkout">
  <button 
    className="w-full mt-4 bg-blue-950 text-white p-3 rounded-xl hover:bg-blue-800 transition mb-20"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{backgroundColor: hovered ? "red" : "#172554"}}
  >
    Checkout
  </button>
  </Link>

</div>
    </>
  )
}

export default CartItem
