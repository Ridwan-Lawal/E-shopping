/* eslint-disable react/prop-types */
import NavBar from "../components/homepage/NavBar";
import Banner from "../components/homepage/banner/Banner";
import Footer from "../components/homepage/Footer";
import ProductsExplore from "../components/homepage/ProductsExplore";
import ProductCard from "../components/homepage/productCard/ProductCard";
import CartBlock from "../components/cart/CartBlock";

function Homepage({
  isCartOpen,
  heroIndex,
  productsData,
  dispatch,
  cart,
  cartLength,
}) {
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

      <CartBlock
        isCartOpen={isCartOpen}
        cart={cart}
        dispatch={dispatch}
        cartLength={cartLength}
      />
    </div>
  );
}

export default Homepage;
