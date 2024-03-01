/* eslint-disable react/prop-types */
function ProductCardButton({ children, bgColor = "bg-cyan-500", onClick }) {
  return (
    <button onClick={onClick} className={` shadow-lg p-4 ${bgColor} `}>
      {children}
    </button>
  );
}

export default ProductCardButton;
