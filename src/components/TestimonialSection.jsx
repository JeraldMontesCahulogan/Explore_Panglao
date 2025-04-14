import { Star } from "lucide-react";
import Map from "../assets/map.png";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white scroll-mt-8" id="testimonial">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center md:items-start">
              <span className="text-indigo-600 font-medium text-xl">
                Testimonial
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6 text-center md:text-left">
                What Our Customers Say About Us
              </h2>
              <p className="text-gray-600 mb-3 max-w-md text-center md:text-left italic">
                &quot;Experienced seamless travel offerings that empowered our
                Panglao adventure. From smooth booking to curated excursions,
                every touchpoint was a delight. We were immersed in a sun-soaked
                experience that blended exploration and relaxation - a true
                benchmark in customer-first tourism&quot;
              </p>
              <div className="mb-6">
                <div className="font-bold">
                  Sahjahan Sagor,{" "}
                  <span className="font-normal">Photographer</span>
                </div>
                <div className="flex mt-2 items-center justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={Map}
              alt="World Map"
              className="w-full xl:w-[80%] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
