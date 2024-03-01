/* eslint-disable react/prop-types */
import { IoAdd, IoRemove } from "react-icons/io5";
import { useInternationalization } from "../customhooks/useInternationalization";

function CartProductCardPrice({ product, dispatch }) {
  const productPriceInNaira = useInternationalization(product?.price);

  const totalPriceInNaira = useInternationalization(
    product?.price * product?.quantity
  );
  return (
    <div className="flex  justify-between items-center gap-8 text-[14px]">
      <div className="border flex items-center justify-between gap-5 text-slate-900 py-1 px-1.5 w-fit shadow-md">
        <button
          onClick={() =>
            dispatch({
              type: "cartProductQuantityDecrease",
              payload: product.id,
            })
          }
        >
          <IoRemove />
        </button>
        <p>{product?.quantity}</p>
        <button
          onClick={() =>
            dispatch({
              type: "cartProductQuantityIncrease",
              payload: product.id,
            })
          }
        >
          <IoAdd />
        </button>
      </div>

      <div className=" flex justify-between w-[70%] gap-4">
        <p className="text-slate-500">{productPriceInNaira}</p>
        <p className=""> {totalPriceInNaira}</p>
      </div>
    </div>
  );
}

export default CartProductCardPrice;
