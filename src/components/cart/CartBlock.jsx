/* eslint-disable react/prop-types */
import Cart from "./Cart";
import CartNav from "./CartNav";

function CartBlock({ isCartOpen, cart, dispatch, cartLength }) {
  return (
    <div
      className={`fixed border bg-white  right-0 h-full transition-all duration-500 shadow-2xl  shadow-gray-500 ${
        isCartOpen
          ? "w-[97%]  sm:w-[67%] md:w-[54%] lg:w-[40%] 2xl:w-[30%]"
          : "w-0"
      } `}
    >
      <Cart cart={cart} dispatch={dispatch}>
        <CartNav dispatch={dispatch} cartLength={cartLength} />{" "}
      </Cart>
    </div>
  );
}

export default CartBlock;
