import Product from "../Model/models.products.js";

// GET /products
export const getProducts = (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((error) => res.status(500).json({ error: error.message }));
};

//creating a product
export const createProduct = (req,res) => {
  Product.create(req.body)
  .then((product) => res.json(product))
  .catch((error) => res.status(500).json( {error: error.message} ))

}

// GET /products/:id
export const getProductsById = (req, res) => {
  const id = Number(req.params.id);  // 👈 Convert to number

  Product.findOne({ productId: id })
    .then(product => {
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json(product);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
};


//PUT / Products: id
export const changeDetails = (req,res) => {
  const id = Number(req.params.id)

  Product.findOneAndUpdate( {productId: id} , req.body , {new: true})
  .then((updatedThings) => {
    if(!updatedThings){
      return res.status(404).json( {message: "Productb Not Found."} )
    }
    res.json(updatedThings)
  })
  .catch((error) => res.status(500).json( {error: error.message} ))
}
