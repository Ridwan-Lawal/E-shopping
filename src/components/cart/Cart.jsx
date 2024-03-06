/* eslint-disable react/prop-types */
import { useContext } from "react";
import CartCheckout from "./CartCheckout";
import CartProductCard from "./CartProductCard";
import CartProductCardHeading from "./CartProductCardHeading";
import CartProductCardPrice from "./CartProductCardPrice";
import CartSubtotal from "./CartSubtotal";
import AppContext from "../AppContext";
import CartNav from "./CartNav";

function Cart() {
  const { cart, dispatch } = useContext(AppContext);

  // calculating the cart subtotal
  const cartSubtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="px-5 flex flex-col">
      <div className="h-[12vh]  mb-4">
        <CartNav />
      </div>
      <div className="h-[63vh]  mt-10  overflow-auto">
        {cart?.map((product) => (
          <CartProductCard
            key={product.id}
            product={product}
            dispatch={dispatch}
          >
            <CartProductCardHeading product={product} dispatch={dispatch} />
            <CartProductCardPrice product={product} dispatch={dispatch} />
          </CartProductCard>
        ))}
      </div>

      <div className="space-y-6 mt-5">
        <CartSubtotal cartSubtotal={cartSubtotal} dispatch={dispatch} />
        <CartCheckout />
      </div>
    </div>
  );
}

export default Cart;
