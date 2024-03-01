import { FaArrowRight } from "react-icons/fa6";

/* eslint-disable react/prop-types */
function CartNav({ cartLength, dispatch }) {
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
