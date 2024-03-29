/* eslint-disable react/prop-types */

import { useContext } from "react";
import AppContext from "../AppContext";
import ProductCard from "./productCard/ProductCard";

function ProductsExplore() {
  const { productsData, dispatch } = useContext(AppContext);
  return (
    <div className="mt-16 pb-24 ">
      <h2 className="text-3xl font-bold text-slate-800 text-center">
        Explore Our Products
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-wrap gap-9 max-w-md mx-auto md:max-w-6xl px-8">
        {productsData?.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
}

export default ProductsExplore;
