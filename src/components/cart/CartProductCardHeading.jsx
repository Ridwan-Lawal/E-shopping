/* eslint-disable react/prop-types */

import { IoClose } from "react-icons/io5";

function CartProductCardHeading({ dispatch, product }) {
  return (
    <div className="flex gap-4 text-slate-900 justify-between ">
      <p className="uppercase text-[14px] cursor-pointer hover:underline ">
        {product?.title}
      </p>
      <button
        onClick={() => dispatch({ type: "productDelete", payload: product.id })}
      >
        <IoClose className="text-2xl text-gray-500" />
      </button>
    </div>
  );
}

export default CartProductCardHeading;
