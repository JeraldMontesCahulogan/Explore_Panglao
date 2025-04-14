import Discount from "../assets/discount.png";
import Discover from "../assets/discoverPanglao.png";

const DiscountSection = () => {
  return (
    <section className="py-16 bg-white scroll-mt-8" id="promo">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={Discount}
              alt="Couple on beach"
              className="w-[70%] md:w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-16 mt-10 md:mt-0">
            <div className="mb-6 flex justify-center">
              <img
                src={Discover}
                alt="Explorer with gear"
                className="object-contain w-[70%] md:w-full"
              />
            </div>
            <p className="text-gray-600 mb-8 text-center md:text-left">
              Your dream escape starts here. From hidden caves to sun-drenched
              beaches, Panglao offers unforgettable experiences at every turn.
              Whether you&apos;re traveling with friends, family, or flying solo
              - enjoy seamless bookings, curated adventures, and the beauty of
              island life. Use code Travelsale12 and get 30% off your next
              Panglao getaway!
            </p>
            <div className="flex space-x-4 md:justify-start justify-center items-center">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                <a href="#contact">Get Exploration</a>
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md">
                <a href="#testimonial">Read More</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
