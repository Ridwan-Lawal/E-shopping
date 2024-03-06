/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import AppContext from "../AppContext";

function NavBar() {
  const { dispatch, cartLength, onClick } = useContext(AppContext);

  const [isNavFixed, setIsNavFixed] = useState(false);
  const heroEl = useRef(null);

  useEffect(function () {
    const heroElSelect = heroEl.current;
    const heroCoords = heroElSelect.getBoundingClientRect();

    console.log(heroElSelect);
    function navScroll() {
      if (window.scrollY > heroCoords.top) {
        setIsNavFixed(true);
        console.log(true);
      } else {
        setIsNavFixed(false);
        console.log("false");
      }
    }

    window.addEventListener("scroll", navScroll);

    return () => window.removeEventListener("scroll", navScroll);
  }, []);

  return (
    <nav
      className={` flex items-center transition-all duration-500 justify-between px-8 py-5 bg-white ${
        isNavFixed && "fixed w-full z-20 top-0 shadow-md"
      } `}
    >
      <section>
        <img
          src="/logo.svg"
          alt=""
          className="h-10 cursor-pointer"
          onClick={onClick}
        />
      </section>

      <section
        onClick={() => dispatch({ type: "toggleCartMenu" })}
        className="relative cursor-pointer "
        ref={heroEl}
      >
        <IoBagOutline className="text-[27px]" />
        <p className="bg-red-600 font-medium text-white flex justify-center items-center rounded-full absolute px-[5px] -bottom-2 -right-1 text-[12px]">
          {cartLength}
        </p>
      </section>
    </nav>
  );
}

export default NavBar;
