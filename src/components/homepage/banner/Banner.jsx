/* eslint-disable react/prop-types */
import BannerContent from "./BannerContent";
import Hero from "./Hero";

function Banner({ heroIndex }) {
  return (
    <div className="flex  flex-col md:flex-row md:justify-between gap-16 py-20 px-8 max-w-[1200px] items-center mx-auto">
      <BannerContent />
      <Hero>
        <img src={`hero-${heroIndex}.jpg`} alt="" className="h-64 md:h-72" />
      </Hero>
    </div>
  );
}

export default Banner;
