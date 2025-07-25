const HeroSection = () => {
  return (
    <div className="m-3 md:m-7 relative top-20">
      <div className="relative  overflow-hidden rounded-lg  bg-gradient-to-b from-black/20 to-black/40 sm:h-[600px] md:h-[750px] lg:h-[900px] flex items-center py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-10">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="./video.mp4" type="video/mp4" />
        </video>


        <div className="p-4 sm:p-6 md:p-8 rounded-lg w-full max-w-screen-xl z-10">
          <div className="text-white font-bold text-xl sm:text-3xl md:text-4xl lg:text-6xl leading-snug">
            <p className="m-0 p-0 ">Order your</p>
            <p className="m-0 p-0">
              <span className="text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text">
                Favorite Food
              </span>
            </p>
          </div>
          <div className="mt-4 text-white text-xs sm:text-sm md:text-base lg:text-xl font-medium max-w-[95%] sm:max-w-[85%] md:max-w-[60%]">
            "Discover fresh, delicious meals and ingredients delivered right to
            your door. From farm-fresh produce to ready-to-eat favorites, we
            make shopping for food easy, fast, and affordable. Enjoy the taste
            of quality with every bite!"
          </div>
          <div className="mt-5 bg-white text-black font-medium rounded-md text-xs sm:text-sm md:text-base lg:text-xl p-2 px-3 w-fit">
            Enjoy 50% discount on first order
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
