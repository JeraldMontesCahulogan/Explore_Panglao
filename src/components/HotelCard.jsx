/* eslint-disable react/prop-types */
import { MapPin } from "lucide-react";

const HotelCard = ({
  image,
  name,
  location,
  rating,
  reviews,
  price,
  ratingName,
}) => {
  const totalStars = 10;
  const filledStars = Math.floor(rating * 2);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 truncate" title={name}>
          {name}
        </h3>
        <div className="flex items-center mb-4">
          <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
          <span className="text-gray-600 text-sm">{location}</span>
        </div>
        <div className="flex items-center justify-between flex-col xl:flex-row">
          <div className="flex items-center justify-between w-full xl:w-auto">
            <div className="flex items-center">
              <div className="flex rating rating-xs rating-half">
                {[...Array(totalStars)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${ratingName}`}
                    className={`mask mask-star-2 ${
                      i % 2 === 0 ? "mask-half-1" : "mask-half-2"
                    } bg-yellow-400`}
                    disabled
                    defaultChecked={i === filledStars - 1}
                  />
                ))}
              </div>
              <div className="text-gray-600 text-sm ml-2">{rating}</div>
            </div>
            <div className="text-gray-600 text-sm ml-2">({reviews})</div>
          </div>
          <div className="bg-indigo-600 text-white px-3 py-1 rounded-md w-full xl:w-auto text-center mt-2 xl:mt-0">
            <span className="font-medium">&#x20B1; {price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
