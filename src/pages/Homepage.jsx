/* eslint-disable react/prop-types */
import NavBar from "../components/homepage/NavBar";
import Banner from "../components/homepage/banner/Banner";
import Footer from "../components/homepage/Footer";
import ProductsExplore from "../components/homepage/ProductsExplore";

import CartBlock from "../components/cart/CartBlock";

function Homepage() {
  return (
    <div className="flex">
      <div className="border w-full">
        <NavBar />
        <Banner />
        <ProductsExplore />
        <Footer />
      </div>

      <CartBlock />
    </div>
  );
}

export default Homepage;
