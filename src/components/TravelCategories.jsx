import {
  Bus,
  CloudSun,
  MountainSnow,
  Sailboat,
  UtensilsCrossed,
} from "lucide-react";

const TravelCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Inventore Veritatis
          </span>
          <h2 className="text-4xl font-bold mt-2">Our Travel Offers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <Bus className="w-16 h-16 text-indigo-600" />
            </div>
            <span className="text-center">Bus Tours</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <UtensilsCrossed className="w-16 h-16 text-indigo-600" />
            </div>
            <span className="text-center">Food Tours</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <CloudSun className="w-16 h-16 text-indigo-600" />
            </div>
            <span className="text-center">Summer Rest</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <Sailboat className="w-16 h-16 text-indigo-600" />
            </div>
            <span className="text-center">Beach Trip</span>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <MountainSnow className="w-16 h-16 text-indigo-600" />
            </div>
            <span className="text-center">Mountain Tours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelCategories;
