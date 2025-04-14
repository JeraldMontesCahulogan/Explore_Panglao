import FeaturedTours from "./components/FeaturedTours";
import PopularPackages from "./components/PopularPackages";
import PopularHotels from "./components/PopularHotels";
import BlogSection from "./components/BlogSection";
import GallerySection from "./components/GallerySection";
// import Discount from "./assets/discount.png";
// import Discover from "./assets/discoverPanglao.png";
import HeroBanner from "./components/HeroBanner";
import PromoSection from "./components/pROMOsECTION.JSX";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";
// import Logo from "./assets/logo.png";
import ContactSection from "./components/ContactSection";
import TravelCategories from "./components/TravelCategories";
import HeaderSection from "./components/HeaderSection";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderSection />

      <HeroBanner />

      <FeaturedTours />

      <PopularPackages />

      <TravelCategories />

      <PopularHotels />

      <GallerySection />

      <PromoSection />

      <TestimonialSection />

      <BlogSection />

      <ContactSection />

      <Footer />
    </main>
  );
}

export default App;
