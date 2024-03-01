/* eslint-disable react/prop-types */
import { IoBagOutline } from "react-icons/io5";

function NavBar({ dispatch, cartLength }) {
  return (
    <div className=" flex items-center justify-between px-8 py-8 bg-white">
      <section>
        <img src="/public/logo.svg" alt="" className="h-10" />
      </section>

      <section
        onClick={() => dispatch({ type: "toggleCartMenu" })}
        className="relative cursor-pointer"
      >
        <IoBagOutline className="text-[27px]" />
        <p className="bg-red-600 font-medium text-white flex justify-center items-center rounded-full absolute px-[5px] -bottom-2 -right-1 text-[12px]">
          {cartLength}
        </p>
      </section>
    </div>
  );
}

export default NavBar;
