import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetails = lazy(() => import("./components/ProductDetails.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./components/Checkout.jsx"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1 className="text-center mt-20">Loading...</h1>}>
        <App />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1 className="text-center mt-20">Loading...</h1>}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <Suspense fallback={<h1 className="text-center mt-20">Loading...</h1>}>
            <ProductDetails />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<h1 className="text-center mt-20">Loading...</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/Checkout",
        element: (
          <Suspense fallback={<h1 className="text-center mt-20">Loading...</h1>}>
            <Checkout />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);