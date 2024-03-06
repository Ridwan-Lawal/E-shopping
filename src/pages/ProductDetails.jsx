/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/homepage/Footer";
import NavBar from "../components/homepage/NavBar";
import AddToCartButton from "../components/productDetails/AddToCartButton";
import { FaArrowLeft } from "react-icons/fa6";
import { useInternationalization } from "../components/customhooks/useInternationalization";
import CartBlock from "../components/cart/CartBlock";

function ProductDetails({
  productsData,
  dispatch,
  cartLength,
  isCartOpen,
  cart,
}) {
  // To get the product name stored in the params in the url
  const { productName } = useParams();
  const navigate = useNavigate();

  //   To return any product in which the name is equal to the name
  const product = productsData?.filter((product) =>
    product?.title.toLowerCase().includes(productName.toLowerCase())
  );

  console.log(productsData, product);

  // A custom hook that converts price to Naira format
  const productPriceInNaira = useInternationalization(product.at(0)?.price);

  return (
    <div className="flex">
      <div className="text-slate-900">
        <NavBar
          dispatch={dispatch}
          onClick={() => navigate("/")}
          cartLength={cartLength}
        />

        <button
          className="bg-slate-900 text-white px-5 py-2 flex items-center  gap-3 shadow-lg ml-12 mt-6"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>

        <section className="flex flex-col md:flex-row items-center gap-10 mt-14 mb-24 px-8 max-w-[1000px] mx-auto border md:gap-28">
          <section className="">
            <img
              src={product.at(0)?.image}
              alt=""
              className="h-72 md:h-[450px]"
            />
          </section>

          <section className="text-center md:text-left md:w-[50%]">
            <h2 className="text-[26px] font-medium md:text-[28px]">
              {product?.at(0).title}
            </h2>
            <h3 className="text-red-500 text-[24px] font-medium mt-1.5">
              {productPriceInNaira}
            </h3>
            <p className="mt-5 text-slate-950">{product?.at(0).description}</p>
            <button
              onClick={() =>
                dispatch({ type: "addProductToCart", payload: product.at(0) })
              }
              className="mt-10 w-fit"
            >
              <AddToCartButton />
            </button>
          </section>
        </section>

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

export default ProductDetails;
