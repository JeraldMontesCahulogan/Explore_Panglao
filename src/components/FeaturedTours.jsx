// // import Aloha from "../assets/alohaBeach.jpg";
// // import Hinagdan from "../assets/hinagdanCave.jpg";
// // import Mithi from "../assets/mithiSpa.jpg";
// // import Beefarm from "../assets/beeFarm.jpg";
// // import sardinesRun from "../assets/sardinesRun.jpg";

// const FeaturedTours = () => {
//   return (
//     <div>hello</div>
//     //     <section className="py-16 bg-gray-50">
//     //       <div className="container mx-auto px-4">
//     //         <div className="text-center mb-12">
//     //           <span className="text-indigo-600 font-medium md:text-xl">
//     //             Featured Tours
//     //           </span>
//     //           <h2 className="text-4xl font-bold mt-2">
//     //             Beautiful Places in Panglao, Bohol
//     //           </h2>
//     //         </div>

//     //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//     //           <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden">
//     //             <img
//     //               src={Aloha}
//     //               alt="Aloha Beach"
//     //               width={600}
//     //               height={800}
//     //               className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
//     //             />
//     //             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
//     //               <span className="text-indigo-600 font-medium">2 Packages</span>
//     //             </div>
//     //             <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
//     //               <h3 className="text-white text-3xl font-bold">Aloha Beach</h3>
//     //               <p className="text-white/80">Dao, Dauis, Panglao</p>
//     //             </div>
//     //           </div>

//     //           <div className="relative rounded-xl overflow-hidden">
//     //             <img
//     //               src={Hinagdan}
//     //               alt="Hinagdan Cave"
//     //               width={400}
//     //               height={300}
//     //               className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
//     //             />
//     //             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
//     //               <span className="text-indigo-600 font-medium">2 Packages</span>
//     //             </div>
//     //             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//     //               <h3 className="text-white text-2xl font-bold">Hinagdan Cave</h3>
//     //               <p className="text-white/80">Bingag, Dauis, Panglao</p>
//     //             </div>
//     //           </div>

//     //           <div className="relative rounded-xl overflow-hidden">
//     //             <img
//     //               src={Mithi}
//     //               alt="Mithi Resort & Spa"
//     //               width={400}
//     //               height={300}
//     //               className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
//     //             />
//     //             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
//     //               <span className="text-indigo-600 font-medium">3 Packages</span>
//     //             </div>
//     //             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//     //               <h3 className="text-white text-2xl font-bold">
//     //                 Mithi Resort & Spa
//     //               </h3>
//     //               <p className="text-white/80">Bingag, Dauis, Panglao</p>
//     //             </div>
//     //           </div>

//     //           <div className="relative rounded-xl overflow-hidden">
//     //             <img
//     //               src={sardinesRun}
//     //               alt="Napaling Reef & Sardine Run"
//     //               width={400}
//     //               height={300}
//     //               className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
//     //             />
//     //             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
//     //               <span className="text-indigo-600 font-medium">1 Package</span>
//     //             </div>
//     //             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//     //               <h3 className="text-white text-xl md:text-2xl font-bold">
//     //                 Napaling Reef & Sardine Run
//     //               </h3>
//     //               <p className="text-white/80">Tangnan, Panglao</p>
//     //             </div>
//     //           </div>

//     //           <div className="relative rounded-xl overflow-hidden">
//     //             <img
//     //               src={Beefarm}
//     //               alt="Bohol Bee Farm"
//     //               width={400}
//     //               height={300}
//     //               className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
//     //             />
//     //             <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
//     //               <span className="text-indigo-600 font-medium">5 Packages</span>
//     //             </div>
//     //             <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
//     //               <h3 className="text-white text-2xl font-bold">Bohol Bee Farm</h3>
//     //               <p className="text-white/80">Dao, Dauis, Panglao</p>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </section>
//   );
// };

// export default FeaturedTours;

import Aloha from "../assets/alohaBeach.jpg";
import Hinagdan from "../assets/hinagdanCave.jpg";
import Mithi from "../assets/mithiSpa.jpg";
import Beefarm from "../assets/beeFarm.jpg";
import sardinesRun from "../assets/sardinesRun.jpg";

const FeaturedTours = () => {
  const places = [
    {
      img: Aloha,
      alt: "Aloha Beach",
      title: "Aloha Beach",
      location: "Dao, Dauis, Panglao",
      packages: "2 Packages",
      spanCols: "col-span-1 md:col-span-2 row-span-2",
      titleSize: "text-3xl",
    },
    {
      img: Hinagdan,
      alt: "Hinagdanan Cave",
      title: "Hinagdanan Cave",
      location: "Bingag, Dauis, Panglao",
      packages: "2 Packages",
      titleSize: "text-2xl",
    },
    {
      img: Mithi,
      alt: "Mithi Resort & Spa",
      title: "Mithi Resort & Spa",
      location: "Bingag, Dauis, Panglao",
      packages: "3 Packages",
      titleSize: "text-2xl",
    },
    {
      img: sardinesRun,
      alt: "Napaling Reef & Sardine Run",
      title: "Napaling Reef & Sardine Run",
      location: "Tangnan, Panglao",
      packages: "1 Package",
      titleSize: "text-xl md:text-2xl",
    },
    {
      img: Beefarm,
      alt: "Bohol Bee Farm",
      title: "Bohol Bee Farm",
      location: "Dao, Dauis, Panglao",
      packages: "5 Packages",
      titleSize: "text-2xl",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 scroll-mt-8" id="tours">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Featured Tours
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Beautiful Places in Panglao, Bohol
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden ${
                place.spanCols || ""
              }`}
            >
              <img
                src={place.img}
                alt={place.alt}
                className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:brightness-90"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-indigo-600 font-medium">
                  {place.packages}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className={`text-white font-bold ${place.titleSize}`}>
                  {place.title}
                </h3>
                <p className="text-white/80">{place.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
