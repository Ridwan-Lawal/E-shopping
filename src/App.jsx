import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import { useEffect, useReducer } from "react";

/*




- handle the routing or the linking between clicking a product to the products details page



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
      return { ...state, productsData: action.payload };

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
  const { isCartOpen, heroIndex, productsData, cart } = state;

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
    <div className="font-roboto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Homepage
                isCartOpen={isCartOpen}
                heroIndex={heroIndex}
                productsData={productsData}
                dispatch={dispatch}
                cart={cart}
              />
            }
          />
          <Route
            path="productDetails/:productId"
            element={<ProductDetails />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
