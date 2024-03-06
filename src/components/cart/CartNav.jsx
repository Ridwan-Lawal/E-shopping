import { useContext } from "react";
import { FaArrowRight } from "react-icons/fa6";
import AppContext from "../AppContext";

/* eslint-disable react/prop-types */
function CartNav() {
  const { dispatch, cartLength } = useContext(AppContext);

  return (
    <div className="flex justify-between border-b py-6 items-center">
      <p className="font-medium">Shopping Bag ({cartLength})</p>
      <button onClick={() => dispatch({ type: "toggleCartMenu" })}>
        <FaArrowRight className="text-lg" />
      </button>
    </div>
  );
}

export default CartNav;
