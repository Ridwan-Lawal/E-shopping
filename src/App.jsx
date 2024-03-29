import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useReducer } from "react";
import AppContext from "./components/AppContext";

import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Error from "./components/app-states/Error";
import Loader from "./components/app-states/Loader";

/*




-error, loading, state
=page not found, page


*/

const initialValue = {
  isCartOpen: false,
  heroIndex: 1,
  status: "loading",
  productsData: [],
  errMessage: "",
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "heroIndexIncreament":
      return {
        ...state,
        heroIndex: state.heroIndex === 4 ? 1 : state.heroIndex + 1,
      };

    case "dataReady":
      return { ...state, productsData: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error", errMessage: action.payload };

    case "clearErrorMessage":
      return { ...state, errMessage: "", status: "loading" };

    // so if any product in the cart has an ID that is equal to the ID of the new product that is about to be added the cart then just increase the quantity of that product ID, and the new Product to the cart, else if no product has an ID that is equal to the new product about to be added then add the new product to the cart
    case "addProductToCart":
      return {
        ...state,
        cart: state.cart.find((product) => product.id === action.payload.id)
          ? state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    // updating the opening and the closing of the cart menu
    case "toggleCartMenu":
      return { ...state, isCartOpen: !state.isCartOpen };

    case "productDelete":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    // Increasing the quantity for each product in the cart
    case "cartProductQuantityIncrease":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    // decreasing the quantity for each product in the cart
    case "cartProductQuantityDecrease":
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };

    case "deleteAllProduct":
      return { ...state, cart: [] };

    default:
      throw new Error("Unknown error");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const { isCartOpen, heroIndex, productsData, cart, status, errMessage } =
    state;
  const cartLength = cart.length;

  /* effect for increasing the index of the hero so it can change
  after 4 seconds
*/
  useEffect(function () {
    const heroTimer = setInterval(
      () => dispatch({ type: "heroIndexIncreament" }),
      4000
    );

    return () => clearInterval(heroTimer);
  }, []);

  /*  Effect to get products from the api */
  useEffect(function () {
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function getProducts() {
      try {
        dispatch({ type: "clearErrorMessage" });
        const res = await fetch(`https://fakestoreapi.com/products`, {
          signal,
        });
        if (!res.ok) throw new Error("Something went wrong fetching wrong");
        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataReady", payload: data });
      } catch (error) {
        if (error.name === "AbortError") return;
        dispatch({ type: "dataFailed", payload: error.message });
        console.error(error);
      }
    }

    getProducts();

    return () => abortController.abort();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        heroIndex,
        productsData,
        cart,
        status,
        errMessage,
        dispatch,
        cartLength,
      }}
    >
      <div className="font-roboto">
        {status === "loading" && <Loader />}
        {status === "error" && <Error errMessage={errMessage} />}

        {status === "ready" && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="productDetails/:productName"
                element={<ProductDetails />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
