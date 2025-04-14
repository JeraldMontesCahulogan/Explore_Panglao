import image1 from "../assets/panglaoShare.webp";
import image2 from "../assets/southShare.jpg";
import image3 from "../assets/mithiShare.jpg";
import image4 from "../assets/napalingShare.jpg";
import image5 from "../assets/beeShare.jpg";
import image6 from "../assets/balicasagShare.webp";
import image7 from "../assets/kayakShare.jpg";
import image8 from "../assets/hennanShare.jpg";
import image9 from "../assets/amoritaShare.jpg";
import image10 from "../assets/aloha.jpg";
import "../gallery.css";

const GallerySection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-indigo-600 font-medium md:text-xl">
            Our Gallery
          </span>
          <h2 className="text-4xl font-bold mt-2">
            Best Traveler Share A Photo
          </h2>
        </div>

        <div className="relative overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide gallery-scroll-container">
          <div className="inline-flex space-x-4 animate-scroll-manual">
            {[...images, ...images].map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
