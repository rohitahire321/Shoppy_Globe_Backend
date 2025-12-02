import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [colored,setColored] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all required fields (*)");
      return;
    }

    // Show success message
    alert("Order Placed Successfully! 🎉");

    // Empty cart
    dispatch(clearCart());

    // Redirect to Home after a small delay
    setTimeout(() => {
      navigate("/");
    }, 800);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4 my-6"
    >
      <h2 className="text-xl font-bold text-blue-900">Customer Details</h2>

      <input
        name="name"
        placeholder="Full Name *"
        value={form.name}
        onChange={handleChange}
        className="w-full p-3 border rounded text-black hover:bg-teal-700"
      />

      <input
        name="phone"
        placeholder="Phone Number *"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-3 border rounded text-black hover:bg-teal-700"
      />

      <textarea
        name="address"
        placeholder="Complete Address *"
        value={form.address}
        onChange={handleChange}
        className="w-full p-3 border rounded text-black hover:bg-teal-700"
      />

      <div className="flex gap-4">
          <input
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded  text-black hover:bg-teal-700"
        />
        <input
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          className="w-1/2 p-3 border rounded text-black hover:bg-teal-700"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700" onMouseEnter={() => setColored(true)} onMouseLeave={() => {setColored(false)}}
        style={{backgroundColor: colored ? "red" : "#172554"}}
      >
        Place Order
      </button>
    </form>
  );
}

export default OrderForm;