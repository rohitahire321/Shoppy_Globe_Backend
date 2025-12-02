import Cart from "../Model/models.cart.js";
import Product from "../Model/models.products.js";

// POST /cart
export const addToCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  //validate QUANTITY
  if(quantity <= 0){
    return res.status(400).json( {error: "quantity must be atleast 1."} )
  }

  //validate PRODUCT_ID
  if(!productId){
    return res.status(400).json( {error: "productId is required."} )
  }

  Product.findOne({ productId })
    .then(product => {
      if (!product) {
        res.status(404).json({ error: "Product not found" });
        return null; // STOP further .then() execution
      }

      const cartItem = new Cart({
        productId,
        quantity: quantity || 1,
      });

      return cartItem.save();
    })
    .then(cartItem => {
      if (cartItem) {  // only respond if cartItem exists
        res.json(cartItem);
      }
    })
    .catch((error) => {
      next(error)
    });
};

// PUT /cart/:id  (cart has ObjectId, so this is fine)
export const updateCart = (req, res) => {
  const { id } = req.params; // this is productId
  const { quantity } = req.body;

  //validate Quantity
  if(quantity <= 0){
    return res.status(400).json( {error: "quantity must be atleast 1"} )
  }

  Cart.findOneAndUpdate(
    { productId: Number(id) },
    { quantity },
    { new: true }
  )
    .then((updatedItem) => {
      if (!updatedItem)
        return res.status(404).json({ error: "Cart item not found" });
      res.json(updatedItem);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};



// DELETE /cart/:id
export const deleteCart = (req, res) => {
  const id = Number(req.params.id);

  Cart.findOneAndDelete( {productId: id} )
    .then((deleted) => {
      if (!deleted)
        return res.status(404).json({ error: "Cart item not found" });
      res.json({ message: "Item removed from cart" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
