import { IoTrash } from "react-icons/io5";
import { useInternationalization } from "../customhooks/useInternationalization";

/* eslint-disable react/prop-types */
function CartSubtotal({ cartSubtotal = 0 }) {
  const cartSubtotalInNaira = useInternationalization(cartSubtotal);

  return (
    <div className="flex justify-between items-center">
      <p className="font-medium tracking-wide">
        Subtotal: {cartSubtotalInNaira}
      </p>
      <button className="bg-red-500 p-3">
        <IoTrash className="text-xl text-white" />
      </button>
    </div>
  );
}

export default CartSubtotal;
