/* eslint-disable react/prop-types */
function Hero({ children }) {
  return (
    <div className="flex justify-center order-1 md:order-2 ">{children}</div>
  );
}

export default Hero;
