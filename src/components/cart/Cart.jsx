/* eslint-disable react/prop-types */
import CartCheckout from "./CartCheckout";
import CartProductCard from "./CartProductCard";
import CartProductCardHeading from "./CartProductCardHeading";
import CartProductCardPrice from "./CartProductCardPrice";
import CartSubtotal from "./CartSubtotal";

function Cart({ cart, children, dispatch }) {
  // calculating the cart subtotal
  const cartSubtotal = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  return (
    <div className="px-5 flex flex-col">
      <div className="h-[12vh]  mb-4">{children}</div>
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
