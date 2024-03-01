/* eslint-disable react/prop-types */
import NavBar from "../components/homepage/NavBar";
import Banner from "../components/homepage/banner/Banner";
import Footer from "../components/homepage/Footer";
import ProductsExplore from "../components/homepage/ProductsExplore";
import Cart from "../components/cart/Cart";
import ProductCard from "../components/homepage/productCard/ProductCard";
import CartNav from "../components/cart/CartNav";

function Homepage({ isCartOpen, heroIndex, productsData, dispatch, cart }) {
  const cartLength = cart.length;
  return (
    <div className="flex">
      <div className="border w-full">
        <NavBar dispatch={dispatch} cartLength={cartLength} />
        <Banner heroIndex={heroIndex} />
        <ProductsExplore>
          {productsData?.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
        </ProductsExplore>
        <Footer />
      </div>

      <div
        className={`fixed border bg-white  right-0 h-full transition-all duration-500 shadow-2xl  shadow-gray-500 ${
          isCartOpen
            ? "w-[97%]  sm:w-[67%] md:w-[54%] lg:w-[40%] 2xl:w-[30%]"
            : "w-0"
        } `}
      >
        <Cart cart={cart} dispatch={dispatch}>
          <CartNav dispatch={dispatch} cartLength={cartLength} />{" "}
        </Cart>
      </div>
    </div>
  );
}

export default Homepage;
