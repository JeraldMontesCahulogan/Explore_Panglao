import { Star } from "lucide-react";
import Balicasag from "../assets/balicasag.jpg";
import Mithi from "../assets/mithi.jpg";
import Inland from "../assets/inland.png";
import Sunset from "../assets/sunsets.jpg";

const PopularPackages = () => {
  const packages = [
    {
      img: Balicasag,
      alt: "Panglao Island Hopping Tour",
      title: "Panglao Island Hopping Tour",
      desc: "The most popular package for exploring Balicasag, Virgin Island, and dolphin watching, complete with boat, guide, gear, and all fees for a hassle-free marine adventure.",
      price: "₱ 2500",
    },
    {
      img: Mithi,
      alt: "Resort Day Passes",
      title: "Resort Day Passes",
      desc: "Treat yourself to a relaxing day at top beachfront resorts like South Palms, Mithi, or Amarela, with full access to the beach, pool and a satisfying lunch—perfect for a taste of luxury without the overnight stay.",
      price: "₱ 1500",
    },
    {
      img: Inland,
      alt: "Panglao Inland Tour",
      title: "Panglao Inland Tour",
      desc: "The best option for first-time visitors to explore Panglao’s culture, nature, and local food, with stops at Hinagdanan Cave, Bohol Bee Farm, and more, all in one easy trip.",
      price: "₱ 2500",
    },
    {
      img: Sunset,
      alt: "Paddleboard or Kayak Sunset Tour",
      title: "Paddleboard or Kayak Sunset Tour",
      desc: "A peaceful and scenic experience through calm coastal waters during golden hour, perfect for couples or solo travelers looking for something unique, with guide and gear included.",
      price: "₱ 2500",
    },
  ];

  return (
    <section className="py-16 bg-white scroll-mt-8" id="packages">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Popular Packages
          </span>
          <h2 className="text-4xl font-bold mt-2">Checkout Our Packages</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition duration-500 hover:scale-[1.03] hover:shadow-3xl hover:bg-gray-50 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="flex flex-col gap-2 mb-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-gray-600">{item.desc}</span>
                </div>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      <span className="text-gray-600 text-sm ml-2">4.8</span>
                    </div>
                    <span className="text-gray-600 text-sm">(2.5k Review)</span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-center">
                    <span className="font-medium">{item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
