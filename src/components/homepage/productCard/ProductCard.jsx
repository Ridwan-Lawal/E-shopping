/* eslint-disable react/prop-types */
import { FaEye, FaPlus } from "react-icons/fa6";

import ProductCardButton from "./ProductCardButton";

import { useInternationalization } from "../../customhooks/useInternationalization";

function ProductCard({ product, dispatch }) {
  // custom hook to convert price to naira
  const productPriceInNaira = useInternationalization(product.price);

  return (
    <div className="relative group ">
      <section className="border flex shadow-md  justify-center items-center h-[300px]">
        <img src={product?.image} alt="" className="h-40" />
      </section>

      <section className="space-y-2 mt-5 ">
        <p className="text-slate-500">{product?.category}</p>
        <p className="font-semibold text-slate-900">{product?.title}</p>
        <p className="text-slate-900">{productPriceInNaira}</p>
      </section>

      <section className="shadow-md w-fit flex flex-col gap-2 absolute top-5 opacity-0 group-hover:opacity-100 right-6 transition-opacity duration-300">
        <ProductCardButton
          onClick={() =>
            dispatch({ type: "addProductToCart", payload: product })
          }
        >
          <FaPlus className="text-white" />
        </ProductCardButton>

        <ProductCardButton bgColor="bg-white">
          <FaEye />
        </ProductCardButton>
      </section>
    </div>
  );
}

export default ProductCard;
