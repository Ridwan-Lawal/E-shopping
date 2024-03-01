import { useNavigate } from "react-router-dom";
import Footer from "../components/homepage/Footer";
import NavBar from "../components/homepage/NavBar";
import AddToCartButton from "../components/productDetails/AddToCartButton";
import { FaArrowLeft } from "react-icons/fa6";

function ProductDetails() {
  const navigate = useNavigate();
  return (
    <div className="text-slate-900">
      <NavBar />

      <button
        onClick={() => navigate(-1)}
        className="bg-slate-900 text-white px-5 py-2 flex items-center  gap-3 shadow-lg ml-12 mt-6"
      >
        <FaArrowLeft /> Back
      </button>

      <section className="flex flex-col md:flex-row items-center gap-10 mt-14 mb-24 px-8 max-w-[1000px] mx-auto border md:gap-28">
        <section className="">
          <img src="/public/hero-1.jpg" alt="" className="h-72 md:h-[450px]" />
        </section>

        <section className="text-center md:text-left md:w-[50%]">
          <h2 className="text-[26px] font-medium md:text-[28px]">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h2>
          <h3 className="text-red-500 text-[24px] font-medium mt-1.5">
            $ 109.95
          </h3>
          <p className="mt-5 text-slate-950">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
          <section className="mt-10">
            <AddToCartButton />
          </section>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetails;
