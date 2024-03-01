/* eslint-disable react/prop-types */

function CartProductCard({ product, children }) {
  return (
    <div className="flex items-center gap-8 border-b pb-6 mb-8 pr-5">
      <section className="w-[25%] sm:w-fit ">
        <img src={product?.image} alt="" className="h-28" />
      </section>
      <section className="w-[90%]  space-y-3">{children}</section>
    </div>
  );
}

export default CartProductCard;
