// import { Link, Route, Routes } from "react-router-dom";
// import Utilities from "./components/Utilities";
// import Header from "./components/Header.jsx";
// import Card from "./components/Card.jsx";

import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="w-full bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Explore Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold">Explore</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium">
              Home
            </Link>
            <Link href="/tours" className="font-medium">
              Tours
            </Link>
            <Link href="/hotel" className="font-medium">
              Hotel
            </Link>
            <Link href="/pages" className="font-medium">
              Pages
            </Link>
            <Link href="/blog" className="font-medium">
              Blog
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
          </nav>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md">
            Get Exploration
          </button>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              It&apos;s A Big World <br />
              Out There, Go <br />
              Explore <span className="text-yellow-500">✧</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Conveniently customize proactive web service for leveraged without
              continually aggregate frictionle ou wellies richard and very
              customize continually.
            </p>
            <div className="flex space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                Get Exploration
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md">
                Read More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://avatar.iran.liara.run/public"
              alt="Explorer with gear"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-0 left-0 opacity-20">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,0 L50,200 M0,50 L200,50"
                stroke="#FF9900"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute top-20 right-20 opacity-20">
            <svg
              width="200"
              height="200"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100,0 C155.228,0 200,44.7715 200,100 C200,155.228 155.228,200 100,200 C44.7715,200 0,155.228 0,100 C0,44.7715 44.7715,0 100,0 Z"
                stroke="#FF9900"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Featured Tours</span>
            <h2 className="text-4xl font-bold mt-2">
              Beautiful Places Around The World
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Paris"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-indigo-600 font-medium">3 Packages</span>
              </div>
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-3xl font-bold">Paris</h3>
                <p className="text-white/80">Starting from $1200</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Brazil"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-indigo-600 font-medium">8 Packages</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-2xl font-bold">Brazil</h3>
                <p className="text-white/80">Starting from $1800</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="London"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-indigo-600 font-medium">3 Packages</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-2xl font-bold">London</h3>
                <p className="text-white/80">Starting from $1600</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Japan"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-md">
                <span className="text-indigo-600 font-medium">3 Packages</span>
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
                <h3 className="text-white text-2xl font-bold">Japan</h3>
                <p className="text-white/80">Starting from $1500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">
              Popular Packages
            </span>
            <h2 className="text-4xl font-bold mt-2">Checkout Our Packages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Greece City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Enjoy The Beauty Place In Greece City
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 5
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">4.8</span>
                  </div>
                  <span className="text-gray-600 text-sm">(2.5k Review)</span>
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-center">
                  <span className="font-medium">$1200</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Maldives Beach"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Enjoy The Beauty Place In Maldives Beach
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 5
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">4.8</span>
                  </div>
                  <span className="text-gray-600 text-sm">(2.5k Review)</span>
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-center">
                  <span className="font-medium">$1200</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Bhutan City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Enjoy The Beauty Place In Bhutan City
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 5
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">4.8</span>
                  </div>
                  <span className="text-gray-600 text-sm">(2.5k Review)</span>
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-center">
                  <span className="font-medium">$1200</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Paris City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">
                  Enjoy The Beauty Place In Paris City
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 5
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-2">4.8</span>
                  </div>
                  <span className="text-gray-600 text-sm">(2.5k Review)</span>
                </div>
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-md text-center">
                  <span className="font-medium">$1200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">
              Inventore Veritatis
            </span>
            <h2 className="text-4xl font-bold mt-2">
              Select Offers For Traveling
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Different Countries</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Bus Tours</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Food Tours</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Summer Rest</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Ship Cruises</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <span className="text-center">Mountain Tours</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Hotels */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Popular Hotel</span>
            <h2 className="text-4xl font-bold mt-2">Most Popular Hotel</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Greece City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Enjoy The Beauty Place In Greece City
                </h3>
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
                  <span className="text-gray-600 text-sm">Bali, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">4.5</span>
                    <span className="text-gray-600 text-sm ml-2">
                      (2.5k Review)
                    </span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
                    <span className="font-medium">$1200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Maldives Beach"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Enjoy The Beauty Place In Maldives Beach
                </h3>
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
                  <span className="text-gray-600 text-sm">Bali, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">4.5</span>
                    <span className="text-gray-600 text-sm ml-2">
                      (2.5k Review)
                    </span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
                    <span className="font-medium">$1200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Bhutan City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Enjoy The Beauty Place In Bhutan City
                </h3>
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
                  <span className="text-gray-600 text-sm">Bali, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">4.5</span>
                    <span className="text-gray-600 text-sm ml-2">
                      (2.5k Review)
                    </span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
                    <span className="font-medium">$1200</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Paris City"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  Enjoy The Beauty Place In Paris City
                </h3>
                <div className="flex items-center mb-4">
                  <MapPin className="w-4 h-4 text-indigo-600 mr-1" />
                  <span className="text-gray-600 text-sm">Bali, Indonesia</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">4.5</span>
                    <span className="text-gray-600 text-sm ml-2">
                      (2.5k Review)
                    </span>
                  </div>
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded-md">
                    <span className="font-medium">$1200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Our Gallery</span>
            <h2 className="text-4xl font-bold mt-2">
              Best Traveler Share A Photo
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-6 space-x-4 scrollbar-hide">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden"
              >
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt={`Gallery Image ${item}`}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 relative">
              <div className="relative">
                <div className="bg-blue-500 absolute inset-0 rounded-[40%] overflow-hidden">
                  <img
                    src="https://dummyimage.com/1280x720/fff/aaa"
                    alt="Couple on beach"
                    width={600}
                    height={600}
                    className="mix-blend-overlay opacity-90 object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-16 mt-10 md:mt-0">
              <div className="mb-6">
                <h2 className="text-5xl font-bold text-gray-800">
                  DISCOVER
                  <span className="block text-yellow-500 font-light italic">
                    Worldwide
                  </span>
                </h2>
                <div className="bg-indigo-600 text-white py-2 px-6 rounded-md inline-block mt-4 transform -rotate-2">
                  <span className="text-xl font-bold">GET 30%OFF</span>
                  <span className="block text-sm">
                    Enter Voucher Code TravelSaleOFF
                  </span>
                </div>
              </div>
              <p className="text-gray-600 mb-8">
                Conveniently customize proactive web services for leveraged
                without continually service aggregate frictionle ou wellies
                richard and very aggregate ou wellies customize continually.
              </p>
              <div className="flex space-x-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md">
                  Get Exploration
                </button>
                <button className="border border-gray-300 px-6 py-3 rounded-md">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="text-indigo-600 font-medium">Testimonial</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                What Our Customers Say About Us
              </h2>
              <p className="text-gray-600 mb-8 max-w-md">
                Conveniently customize proactive web services for leveraged
                without continuoery services aggregate frictionle ou wellies
                richard and very aggregate frictionle ou wellies customize
                continually.
              </p>
              <div className="mb-6">
                <div className="font-bold">
                  Sahjahan Sagor,{" "}
                  <span className="font-normal">Photographer</span>
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="World Map"
                width={600}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-indigo-600 font-medium">Blog Post</span>
            <h2 className="text-4xl font-bold mt-2">Our Latest Blog</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Greece"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-medium mb-2">
                  Travel
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Beauty Place In Greece
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs">45</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">23k+ view</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Maldives"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-medium mb-2">
                  Travel
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Beauty Place In Maldives
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs">45</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">23k+ view</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Thailand"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-medium mb-2">
                  Travel
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Beauty Place In Thailand
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs">45</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">23k+ view</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://dummyimage.com/1280x720/fff/aaa"
                  alt="Greece"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-indigo-600 text-sm font-medium mb-2">
                  Travel
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Beauty Place In Greece
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                      <span className="text-xs">45</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                    <span className="text-gray-600 text-sm">23k+ view</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Travel Logo 1"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Travel Logo 2"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Travel Logo 3"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="https://dummyimage.com/1280x720/fff/aaa"
                alt="Travel Logo 4"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Explore</h3>
              <p className="text-gray-400 mb-4">
                Conveniently customize proactive web services without
                continually aggregate frictionle.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Latest Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tour Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to get the latest updates and
                offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 w-full rounded-l-md focus:outline-none text-black"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Explore. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* <Header />
      <Routes>
        <Route path="/" element={<Utilities />} />
        <Route path="/cards" element={<Card />} />
      </Routes> */}
    </main>
  );
}

export default App;
