/* eslint-disable react/prop-types */

function ProductsExplore({ children }) {
  return (
    <div className="mt-16 pb-24 ">
      <h2 className="text-3xl font-bold text-slate-800 text-center">
        Explore Our Products
      </h2>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-wrap gap-9 max-w-md mx-auto md:max-w-6xl px-8">
        {children}
      </div>
    </div>
  );
}

export default ProductsExplore;
