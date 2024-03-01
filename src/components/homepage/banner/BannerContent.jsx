function BannerContent() {
  return (
    <section className="order-2 md:order-1 text-center md:text-left">
      <p className="uppercase font-medium flex items-center justify-center md:justify-start text-slate-800 gap-4 ">
        <span className="border-b-2  bg-blue border-slate-800 px-5 "></span>
        <span>hot trend</span>
      </p>

      <h1 className="uppercase text-5xl md:text-6xl mt-2 text-slate-800 font-bold">
        fresh fashion finds
      </h1>

      <h1 className="text-5xl   font-light md:text-6xl text-slate-800 mt-1">
        New collection
      </h1>

      <button className="uppercase font-medium border-b-[2px] border-slate-800 text-slate-800 tracking-wide mt-6">
        Discover More
      </button>
    </section>
  );
}

export default BannerContent;
