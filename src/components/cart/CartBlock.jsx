/* eslint-disable react/prop-types */
import { useContext } from "react";
import Cart from "./Cart";

import AppContext from "../AppContext";

function CartBlock() {
  const { isCartOpen } = useContext(AppContext);
  return (
    <div
      className={`fixed border bg-white  right-0 h-full transition-all duration-500 shadow-2xl  shadow-gray-500 ${
        isCartOpen
          ? "w-[97%]  sm:w-[67%] md:w-[54%] lg:w-[40%] 2xl:w-[30%]"
          : "w-0"
      } `}
    >
      <Cart />
    </div>
  );
}

export default CartBlock;
