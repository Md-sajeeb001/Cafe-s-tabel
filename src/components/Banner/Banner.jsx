const Banner = () => {
  return (
    <div>
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/St70KMr/Group-5.png)",
        }}
      ></div>
      <div className="text-center lg:max-w-[800px] py-8 lg:space-y-4 space-x-3 mx-auto">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-slate-900">Our Recipes</h2>
        <p className="text-slate-700 text-sm sm:text-lg">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
