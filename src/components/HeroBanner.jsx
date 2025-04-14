import Plain from "../assets/plains.png";
import Traveller from "../assets/traveller.png";

const HeroBanner = () => {
  return (
    <section className="relative bg-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 flex justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 ">
              One Island <br />
              Endless Wonders <br />
              Explore Panglao <span className="text-yellow-500">✧</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-md text-lg">
              Whether you&apos;re diving into coral reefs, exploring ancient
              caves, making memories with family, or sharing sunsets with
              someone special — Panglao invites you to unwind and fall in love
              with every moment.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                <a href="#contact">Get Exploration</a>
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md">
                <a href="#tours">Read More</a>
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 z-10">
          <img
            src={Traveller}
            alt="Explorer with gear"
            width={550}
            height={550}
            className="object-contain "
          />
        </div>

        <div className="absolute bottom-0 left-0 opacity-20 hidden xl:block">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,0 L50,200 M0,50 L200,50"
              stroke="#CC5500"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="absolute top-20 right-20 opacity-20 hidden md:block">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100,0 C155.228,0 200,44.7715 200,100 C200,155.228 155.228,200 100,200 C44.7715,200 0,155.228 0,100 C0,44.7715 44.7715,0 100,0 Z"
              stroke="#CC5500"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 right-20 opacity-20 hidden xl:block">
          <img src={Plain} alt="" width={350} height={300} />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
