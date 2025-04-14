// import { MapPin } from "lucide-react";
// import Hennan from "../assets/hennan.jpg";
// import Amorita from "../assets/amorita.jpg";
// import Bellevue from "../assets/bellevue.jpg";
// import Be from "../assets/be.jpg";

// const PopularHotels = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <span className="text-indigo-600 font-medium md:text-xl">
//             Popular Hotel
//           </span>
//           <h2 className="text-4xl font-bold mt-2">Most Popular Hotel</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <div className="bg-white rounded-xl overflow-hidden shadow-md">
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={Hennan}
//                 alt="Hennan"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">
//                 Henann Resort Alona Beach
//               </h3>
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
//                 <span className="text-gray-600 text-sm">
//                   Alona Beach Road, Tawala, Panglao
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center justify-center">
//                   <div className="flex">
//                     <div className="rating rating-xs rating-half flex justify-center items-center">
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="rating-hidden"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         defaultChecked
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-10"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                   <span className="text-gray-600 text-sm ml-2">4.5</span>
//                   <span className="text-gray-600 text-sm ml-2">
//                     (24.4k Review)
//                   </span>
//                 </div>
//                 <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
//                   <span className="font-medium">&#x20B1; 10 000</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl overflow-hidden shadow-md">
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={Amorita}
//                 alt="Amorita Resort"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">Amorita Resort</h3>
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
//                 <span className="text-gray-600 text-sm">
//                   Ester A. Lim Drive, Tawala, Panglao
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center justify-center">
//                   <div className="flex">
//                     <div className="rating rating-xs rating-half flex justify-center items-center">
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="rating-hidden"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         defaultChecked
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-11"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                   <span className="text-gray-600 text-sm ml-2">4.6</span>
//                   <span className="text-gray-600 text-sm ml-2">
//                     (4.7k Review)
//                   </span>
//                 </div>
//                 <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
//                   <span className="font-medium">&#x20B1; 12 000</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl overflow-hidden shadow-md">
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={Bellevue}
//                 alt="The Bellevue Resort"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">The Bellevue Resort</h3>
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
//                 <span className="text-gray-600 text-sm">
//                   Doljo Beach, Panglao
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center justify-center">
//                   <div className="flex">
//                     <div className="rating rating-xs rating-half flex justify-center items-center">
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="rating-hidden"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         defaultChecked
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-12"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                   <span className="text-gray-600 text-sm ml-2">4.4</span>
//                   <span className="text-gray-600 text-sm ml-2">
//                     (5.8k Review)
//                   </span>
//                 </div>
//                 <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
//                   <span className="font-medium">&#x20B1; 9 000</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-xl overflow-hidden shadow-md">
//             <div className="h-48 overflow-hidden">
//               <img
//                 src={Be}
//                 alt="BE Grand Resort Bohol"
//                 width={400}
//                 height={300}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-xl font-bold mb-2">BE Grand Resort Bohol</h3>
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
//                 <span className="text-gray-600 text-sm">
//                   Barangay Danao, Panglao
//                 </span>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center justify-center">
//                   <div className="flex">
//                     <div className="rating rating-xs rating-half flex justify-center items-center">
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="rating-hidden"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         defaultChecked
//                         className="mask mask-star-2 mask-half-1 bg-yellow-400"
//                         disabled
//                       />
//                       <input
//                         type="radio"
//                         name="rating-13"
//                         className="mask mask-star-2 mask-half-2 bg-yellow-400"
//                         disabled
//                       />
//                     </div>
//                   </div>
//                   <span className="text-gray-600 text-sm ml-2">4.3</span>
//                   <span className="text-gray-600 text-sm ml-2">
//                     (374 Review)
//                   </span>
//                 </div>
//                 <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
//                   <span className="font-medium">&#x20B1; 8 000</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PopularHotels;

import Hennan from "../assets/hennan.jpg";
import Amorita from "../assets/amorita.jpg";
import Bellevue from "../assets/bellevue.jpg";
import Be from "../assets/be.jpg";
import HotelCard from "./HotelCard"; // adjust path if needed

const hotelData = [
  {
    image: Hennan,
    name: "Henann Resort Alona Beach",
    location: "Alona Beach Road, Tawala, Panglao",
    rating: 4.5,
    reviews: "24.4k Review",
    price: "10 000",
    ratingName: "henann",
  },
  {
    image: Amorita,
    name: "Amorita Resort",
    location: "Ester A. Lim Drive, Tawala, Panglao",
    rating: 4.6,
    reviews: "4.7k Review",
    price: "12 000",
    ratingName: "amorita",
  },
  {
    image: Bellevue,
    name: "The Bellevue Resort",
    location: "Doljo Beach, Panglao",
    rating: 4.4,
    reviews: "5.8k Review",
    price: "9 000",
    ratingName: "bellevue",
  },
  {
    image: Be,
    name: "BE Grand Resort Bohol",
    location: "Barangay Danao, Panglao",
    rating: 4.3,
    reviews: "374 Review",
    price: "8 000",
    ratingName: "be",
  },
];

const PopularHotels = () => {
  return (
    <section className="py-16 bg-gray-50 scroll-mt-8" id="hotel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Popular Hotel
          </span>
          <h2 className="text-4xl font-bold mt-2">Most Popular Hotel</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {hotelData.map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularHotels;
